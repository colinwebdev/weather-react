import { useState, useContext, useRef } from 'react'
import WeatherContext from '../context/weather/WeatherContext'
import { getGeo } from '../context/weather/WeatherActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'
import Spinner from './Spinner'

Modal.setAppElement('#root')

function Zip() {
    const { dispatch } = useContext(WeatherContext)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorText, setErrorText] = useState(null)
    const openModal = () => setModalIsOpen(true)
    const closeModal = () => setModalIsOpen(false)

    const zipRef = useRef(null)

    const getZip = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        let zip = zipRef.current.value
        let data = await getGeo(zip)
        if (data.cod) {
            setErrorText('Please enter a valid zip code')
        } else {
            setErrorText(null)
            dispatch({ type: 'GET_ZIP', payload: data })
        }
        setIsLoading(false)
        if (!data.cod) closeModal()
    }

    return (
        <>
            <button onClick={openModal}>Enter zip</button>
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
            </Modal>
        </>
    )
}

export default Zip
