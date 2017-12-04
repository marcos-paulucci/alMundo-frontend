import React, { Component } from 'react';
import FlexView from 'react-flexview';
import MobileFiltersSection from '../components/mobileFiltersSection';
import HotelsList from '../components/hotelsList'
import MediaQuery from 'react-responsive';
import HotelsService from '../services/HotelsService';
import Spinner from 'react-spinkit';
import Filters from '../components/filters';
class HotelsContent extends Component {

    state = {
        hotels: [],
        filterHotelName: "",
        filterHotelStars: new Set(),
        loading: true
    };

    componentDidMount = async () => {
        await this.fetchHotels();
    };

    componentWillMount = () => {
        let starsSelected = this.state.filterHotelStars;
        for (let i = 1; i <= 5 ; i++ ){
            starsSelected.add(i);
        }
        this.setState({filterHotelStars: starsSelected});
    };

    fetchHotels = async () => {
        let hotels;
        try {
            hotels = await HotelsService.getHotels({name: this.state.filterHotelName, stars: this.state.filterHotelStars});
            this.setState({hotels: hotels, loading: false});
        } catch (e) {
            console.log("Error fetching hotels");
        }
    };
    updateFilters = async (filterHotelName, filterHotelStars) => {
        this.setState({filterHotelName: filterHotelName, filterHotelStars: filterHotelStars});
        await this.fetchHotels();
    };

    render() {
        return this.state.loading ?
            <FlexView grow={1}
                      hAlignContent='center'
                      vAlignContent='center'
                      height={'100%'}>
                <Spinner name='double-bounce' />
            </FlexView>
            :
            <FlexView grow={1}>
                <MediaQuery query="(min-device-width: 800px)">
                    <FlexView row="true" className="alMundoContent"  width={'100%'} style={{marginTop: '2em'}}>
                        <FlexView
                            shrink={false}
                            className="filtersContainer"
                            width="25%"
                            style={{marginRight: '1em', height: '60%'}}
                        >
                            <Filters filterHotelName={this.state.filterHotelName} filterHotelStars={this.state.filterHotelStars} updateFilters={this.updateFilters}/>
                        </FlexView>
                        <FlexView
                            className="hotelsRegion"
                            width="75%"
                        >
                            <HotelsList hotels={this.state.hotels}/>
                        </FlexView>
                    </FlexView>
                </MediaQuery>

                <MediaQuery className="contentContainer greyBackgroundAlmundo" query="(max-device-width: 800px)">
                    <FlexView className="alMundoMobileContent" column width={'100%'}>
                        <FlexView className="mobileFiltersContainer" grow={1} styles={{height: '12%',marginBottom: '4%'}}>
                            <MobileFiltersSection filterHotelName={this.state.filterHotelName} filterHotelStars={this.state.filterHotelStars} updateFilters={this.updateFilters}/>
                        </FlexView>
                        <FlexView grow={7} height={'100%'} className="mobileHotelsRegion">
                            <HotelsList hotels={this.state.hotels}/>
                        </FlexView>
                    </FlexView>
                </MediaQuery>
            </FlexView>
    }
}

export default HotelsContent;