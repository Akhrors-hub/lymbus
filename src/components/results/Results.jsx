import React, { PropTypes } from 'react';
import Loading from 'react-simple-loading';
import Result from './Result';
import { SearchAgain } from 'components';

const Results = ({
    isLoading,
    results,
    onSelect
}) => (
    isLoading ?
    <Loading /> :
    <div className='col-sm-6 col-sm-offset-3'>
        <p className='lead'>Select a song</p>
        {
            results.map(result => 
                <Result 
                    key={result.id} 
                    songInfo={result}
                    onSelect={onSelect} />
            )
        }
        <SearchAgain />
    </div>
);

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
}

export default Results;