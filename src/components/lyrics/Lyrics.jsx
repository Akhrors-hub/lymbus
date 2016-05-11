import React, { PropTypes } from 'react';
import Loading from 'react-simple-loading';
import { FullLyrics, Sorted, Option } from './';
import { SearchAgain } from 'components';

const Lyrics = ({
    isFetching,
    lyrics,
    order,
    songInfo,
    mainView,
    childView,
    onChangeMainView,
    onChangeChildView,
    onChangeOrder
}) => (
    isFetching ?
    <div style={{position: 'fixed', top: 0, right: 0, bottom: 0, left: 0}}><Loading stroke={'3px'}
    size={'80px'} /></div> :
    <div className='col-sm-12'>
        <p className='lead'>{songInfo.artist} - {songInfo.track}</p>
        <SearchAgain />
        <div className='col-sm-12'>
            <div className='col-sm-6 col-sm-offset-3'>
                <Option text='Sorted' doClick={onChangeMainView.bind(null, 'Sorted')} />
                <Option text='Full Lyrics' doClick={onChangeMainView.bind(null, 'FullLyrics')} />
            </div>
            {mainView === 'FullLyrics'  && <FullLyrics lyrics={lyrics.all} />}
            {mainView === 'Sorted'      && <Sorted order={order} lyrics={lyrics} view={childView} onChangeChildView={onChangeChildView} onChangeOrder={onChangeOrder} />}
        </div>
    </div>
);

Lyrics.propTypes = {
    childView: PropTypes.string.isRequired, // change this probably
    isFetching: PropTypes.bool.isRequired,
    lyrics: PropTypes.shape({
        all: PropTypes.array,
        byWord: PropTypes.object,
        byCount: PropTypes.object,
        uniqueWords: PropTypes.number
    }),
    mainView: PropTypes.string.isRequired, // change this probably
    order: PropTypes.bool.isRequired,
    onChangeMainView: PropTypes.func.isRequired,
    onChangeChildView: PropTypes.func.isRequired,
    onChangeOrder: PropTypes.func.isRequired,
    songInfo: PropTypes.shape({
        track: PropTypes.string,
        artist: PropTypes.string
    })
};

export default Lyrics;