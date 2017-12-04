import {apiUrl} from '../config/apiProperties'

class Service {

  /**
   * Sends a json request to server
   * @param url
   * @param requestOptions
   */
  async sendRequest(endpointUrl, params, requestOptions) {
    let url = new URL(apiUrl + endpointUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    let request = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
    request = Object.assign(request, requestOptions);
    let rawResponse = await fetch(url, request);
    let responseBody = await this.parseResponse(rawResponse);
    await this.checkResponseStatus(rawResponse, responseBody);
    return responseBody;
  }

  async parseResponse(rawResponse) {
    try {
      return await this._parseJSON(rawResponse);
    } catch (e) {
      console.error("Invalid server raw response", e);
      throw 'Ocurrió un problema en la comunicación con el servidor.'
    }
  }


  /**
   * Parse response body to always return a valid JS object,
   * even if body is null or empty ("{}").
   *
   * @param response
   * @returns {Promise.<{}>}
   * @private
   */
  _parseJSON = async (response) => {
    let text = await response.text();
    let parsed = JSON.parse(text);
    return parsed;
  };

  async checkResponseStatus(rawResponse, responseBody) {
    let status = rawResponse.status;
    if (status < 200 || status >= 400) {
      console.log(`Something unexpected did happen (status: ${status}). Raw response: \n`, rawResponse);

      if (status === 403) {
        throw 'El servidor no está disponible. Por favor, vuelva a intentar más tarde :(';
      }

      if (status === 401) {
        let defaultMsg = 'La sesión ha caducado. Por favor, vuelva a iniciar sesión.';
        throw {message: defaultMsg, status, responseBody};
      }

      if (status === 400) {
        let responseJSON = responseBody && JSON.stringify(responseBody) || "";
        console.log(`Error 400: bad request. Respuesta obtenida: ${responseJSON} `);
        throw {message: 'La solicitud es inválida.', status, responseBody};
      }
      throw 'Ha ocurrido un error. (status: ' + status + ').';

    }
  }
}

let baseService = new Service();
export default baseService;
