import React, { PropTypes } from 'react';
import { Cloud, Ordered, Option } from './';

const Sorted = ({
    order,
    lyrics,
    view,
    onChangeChildView,
    onChangeOrder
}) => (
    <div className='col-sm-12'>
        <div className='col-sm-12'>
            <Option text='Cloud' doClick={onChangeChildView.bind(null, 'Cloud')}/>
            <Option text='Ascending' doClick={() => {
                onChangeChildView('Ordered')
                onChangeOrder(true)
            }} />
            <Option text='Descending' doClick={() => {
                onChangeChildView('Ordered')
                onChangeOrder(false)
            }} />
        </div>
        {view === 'Cloud' && <Cloud lyrics={{...lyrics.byWord}} />}
        {view === 'Ordered' && <Ordered order={order} lyrics={{ byCount: lyrics.byCount, uniqueWords: lyrics.uniqueWords }} />}
    </div>
);

Sorted.propTypes = {
    order: PropTypes.bool.isRequired,
    lyrics: PropTypes.shape({
        all: PropTypes.array.isRequired,
        byWord: PropTypes.object.isRequired,
        byCount: PropTypes.object.isRequired,
        uniqueWords: PropTypes.number.isRequired
    }),
    onChangeChildView: PropTypes.func.isRequired,
    onChangeOrder: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired // change this when redux is added probably
};

export default Sorted;