import React, { Component } from 'react';
import FlexView from 'react-flexview';
import Modal from 'react-modal';
import Filters from './filters';

const customStyles = {
    content : {
        top                   : '40%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width: '90%',
        height: '67%',
        backgroundColor: '#F5F5F5',
        padding: '0'
    }
};


class MobileFiltersSection extends Component {
    state = {
        modalIsOpen: false
    };

    openModal = () =>{
        this.setState({modalIsOpen: true});
    };

    closeModal = () =>{
        this.setState({modalIsOpen: false});
    };



    render() {
        let {filterHotelName, filterHotelStars, updateFilters} = this.props;
        return <FlexView
            grow={1}
            height={'60%'}
        >
            <FlexView
                grow={1}
                height={50}
                hAlignContent='center'
                vAlignContent='center'
            >
                <button className="fontAlmundo" style={{fontSize: '19px',fontWeight: 700, backgroundColor: 'transparent', borderWidth: 0}} onClick={this.openModal}>Filtrar</button>
                <div style={{width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent',
                    borderTop: '7px solid #3680A7'}} />
            </FlexView>

            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={{width: '100%', height: '100%'}}>
                    <Filters modal={true} filterHotelName={filterHotelName} filterHotelStars={filterHotelStars} updateFilters={updateFilters} closeModal={this.closeModal} />
                </div>
            </Modal>
        </FlexView>
    }
}



export default MobileFiltersSection;