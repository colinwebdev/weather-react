import { useState, useContext, useRef } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import {
    getGeo,
    getCurrent,
    getForecast,
    setOpen,
} from '../context/weather/WeatherActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Spinner from './Spinner'

function Zip() {
    const { dispatch, forecast, error } = useContext(WeatherContext)

    const [isLoading, setIsLoading] = useState(false)

    const zipRef = useRef(null)

    const getZip = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        let zip = zipRef.current.value
        if (zip === '') {
            dispatch({ type: 'SET_ERROR', payload: 'Please enter a zip code' })
            setIsLoading(false)
            return
        }
        let data = await getGeo(zip)
        if (data[0] === '0' || data[0] === undefined || data.cod) {
            dispatch({
                type: 'SET_ERROR',
                payload: 'Please enter a valid zip code',
            })
            setIsLoading(false)
            return
        }

        let currentData = await getCurrent(data)
        let forecast = await getForecast(data)
        let openData = await setOpen(0, forecast.length)
        dispatch({ type: 'SET_CURRENT', payload: currentData })
        dispatch({ type: 'SET_FORECAST', payload: forecast })
        dispatch({type: 'SET_OPEN', payload: openData})
        setIsLoading(false)
    }

    // if (error) return <>{error}</>

    return (
        <>
            <form className='inputWrap flex' onSubmit={getZip}>
                <input
                    className='grow'
                    type='text'
                    aria-label='Enter Zip Code'
                    id='zip'
                    placeholder='Enter Zip Code'
                    ref={zipRef}
                />
                <button type='submit' aria-label='Submit'>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    )}
                </button>
            </form>
            {error && <div className='py-2 px-5 mt-2 errorText'>{error}</div>}

            {/* <button id='getZip' onClick={openModal}>Enter zip</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='modalBox'
                overlayClassName='overlayBox'
                contentLabel='Get Zip Code'
            >
                <button className='btn-close' onClick={closeModal}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <h1 className='mb-4'>Enter Zip Code</h1>
                <form className='inputWrap flex' onSubmit={getZip}>
                    <input
                        className='grow'
                        type='text'
                        aria-label='Enter Zip Code'
                        id='zip'
                        placeholder='Enter Zip Code'
                        ref={zipRef}
                    />
                    <button type='submit' aria-label='Submit'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
                <div className='py-2 px-5 mt-2 errorText'>
                    {isLoading && <Spinner />}

                    {errorText}
                </div>
            </Modal> */}
        </>
    )
}

export default Zip
