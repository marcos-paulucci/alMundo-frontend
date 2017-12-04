import React, { Component } from 'react';
import FlexView from 'react-flexview';
import {Star, Search} from '../uiAssets/icons/filters/iconComponents';

class Filters extends Component {
    state = {
        filterHotelName: this.props.filterHotelName,
        filterHotelStars: this.props.filterHotelStars,
        filterHotelNameSectionVisible: true,
        filterHotelStarsSectionVisible: true
    };


    getNStars = (numberOfStars)=> {
        let starsArray = [];
        for (let i = 0; i < numberOfStars; i++){
            starsArray.push(<Star key={i} height="15" width="15" fillColor="#EDBD38"/>);
        }
        return starsArray;
    };

    starsCheckboxChanged = async (e)=> {
        let checkboxValue = parseInt(e.target.value, 10);
        let starsSelected = this.state.filterHotelStars;
        e.target.checked ? starsSelected.add(checkboxValue) : starsSelected.delete(checkboxValue);
        this.setState({filterHotelStars: starsSelected});
        await this.publishFiltersChanges();
    };

    allStarsCheckboxChanged  = async (e)=> {
        let starsSelected = this.state.filterHotelStars;
        for (let i = 1; i <= 5 ; i++ ){
            e.target.checked ? starsSelected.add(i) : starsSelected.delete(i) ;
        }
        this.setState({filterHotelStars: starsSelected});
        await this.publishFiltersChanges();
    };

    getAllStarsSelected  = ()=> {
        let starsSelected = this.state.filterHotelStars;
        for (let i = 1; i <= 5 ; i++ ){
            if (!starsSelected.has(i))
                return false;
        }
        return true;
    };

    applyNameChanges = async () => {
        await this.publishFiltersChanges();
    };

    publishFiltersChanges = async () => {
        await this.props.updateFilters(this.state.filterHotelName, this.state.filterHotelStars);
    };

    cancel = () => {
        this.props.closeModal();
    };

    getNStarsChecked = (n) => {
        return this.state.filterHotelStars.has(n) ? "checked" : "";
    };

    toggleFilterHotelNameSection = () => {
        this.setState({
            filterHotelNameSectionVisible: !this.state.filterHotelNameSectionVisible
        });
    };

    toggleFilterHotelStarsSection = () => {
        this.setState({
            filterHotelStarsSectionVisible: !this.state.filterHotelStarsSectionVisible
        });
    };

    render() {
        let starsLis = [];
        for (let i = 5; i > 0; i--) {
            starsLis.push(<li style={{padding: '0.5em 0 0.2em 0'}} key={i}><input type="checkbox" value={i} checked={this.getNStarsChecked(i)} onChange={this.starsCheckboxChanged} />{this.getNStars(i)}</li>);
        }
        return <FlexView
            grow={1}
            column
            style={{height: '100%'}}
        >
            <FlexView
                hAlignContent='left'
                vAlignContent='center'
                style={{height: 'auto', margin: '0.3em 0', height: '2em' , backgroundColor: 'white', paddingLeft: '1em', fontSize: '1.1em', fontWeight: 600}}
            >
                Filtros
            </FlexView>
            <FlexView
                grow={1} column>
                <FlexView
                    hAlignContent='center'
                    vAlignContent='center'
                    column
                    style={{height: 'auto', margin: '0.3em 0', backgroundColor: 'white', padding: '0.2em 0 0.2em 1em', fontSize: '1.1em'}}
                >
                    <FlexView
                        grow={1}
                        row="true"
                        width="100%"
                        hAlignContent='center'
                        vAlignContent='center'
                        className="blueAlmundo"
                        style={{height: '2em'}}
                    >
                    <span  style={{marginRight: 'auto'}}>
                        <Search height="14" width="14" fillColor="#3680A7"/>
                        <label style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: '0.5em', fontWeight: 600}}>Nombre del hotel</label>
                    </span>

                        <span  onClick={this.toggleFilterHotelNameSection} style={{display: 'inline-block',width: '1em', height: '1em',marginRight: '5%'}}>
                        <div style={this.state.filterHotelNameSectionVisible ? styles.arrowUp : styles.arrowDown} />
                    </span>
                    </FlexView>
                    {this.state.filterHotelNameSectionVisible && <FlexView
                        grow={1}
                        row="true"
                        width="100%"
                        hAlignContent='left'
                        vAlignContent='center'
                        style={{height: '3em'}}
                    >
                        <input type="text" placeholder="Ingrese el nombre del hotel" style={{height: '2.2em', width: '60%', borderWidth: 1, marginRight: 'auto'}} value={this.state.filterHotelName} onChange = {(e) => this.setState({filterHotelName: e.target.value})}/>
                        <button onClick={this.applyNameChanges} style={{fontSize: '0.9em', height: '2.2em', width: '20%', borderRadius: 5, color: 'white', backgroundColor: '#022A7C', borderWidth: 0, marginRight: '5%'}}>Aceptar</button>
                    </FlexView>}
                </FlexView>
                <FlexView
                    column
                    hAlignContent='center'
                    vAlignContent='center'
                    style={{height: 'auto', margin: '1em 0', backgroundColor: 'white', padding: '1em 0 0.2em 1em'}}
                >
                    <FlexView
                        grow={1}
                        row="true"
                        width="100%"
                        hAlignContent='center'
                        vAlignContent='top'
                    >
                    <span style={{marginRight: 'auto', fontSize: '1.1em', fontWeight: 600}}>
                        <span style={{verticalAlign: 'middle'}}><Star height="15" width="15" fillColor="#3680A7"/></span>
                        <label style={{marginLeft: '0.5em', display: 'inline-block', verticalAlign: 'middle', color: '#3680A7'}}>Estrellas</label>
                    </span>
                        <span onClick={this.toggleFilterHotelStarsSection} style={{display: 'inline-block',width: '1em', height: '1em',marginRight: '5%'}}>
                        <div style={this.state.filterHotelStarsSectionVisible ? styles.arrowUp : styles.arrowDown} />
                    </span>
                    </FlexView>
                    {this.state.filterHotelStarsSectionVisible && <FlexView
                        grow={7}
                        row="true"
                        width="100%"
                        hAlignContent='left'
                        vAlignContent='center'
                    >
                        <FlexView
                            grow={1}
                            column
                            width="100%"
                            hAlignContent='left'
                            vAlignContent='center'
                        >
                            <ul style={{listStyleType: 'none', paddingLeft: 0}}>
                                <li><input type="checkbox" value="Todas" checked={this.getAllStarsSelected()} onChange={this.allStarsCheckboxChanged} />Todas las estrellas</li>
                                {starsLis}
                            </ul>
                        </FlexView>
                    </FlexView>}
                </FlexView>
            </FlexView>

            {this.props.modal ? <FlexView
                row="true"
                hAlignContent='center'
                vAlignContent='center'
                style={{marginTop: 'auto'}}
            >
                <button onClick={this.cancel} style={{marginBottom: '1em', width: '30%', borderRadius: 5, height: '3em', color: 'white', backgroundColor: 'grey', borderWidth: 0}}>Volver</button>
            </FlexView> : null}



        </FlexView>
    }
}

const styles = {
  arrowDown: {
      display: 'inline-block',
      width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent',
      borderTop: '7px solid #0B3D78'
  },
    arrowUp: {
        display: 'inline-block',
        width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderBottom: '7px solid #0B3D78',
    }
};

export default Filters;