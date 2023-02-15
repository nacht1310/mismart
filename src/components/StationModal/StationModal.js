import './StationModal.css'
import { useForm } from 'react-hook-form'

function StationModal({dataState, setState, addStation}) {
    const cities = [
        {city: 'Vũng Tàu',
         abbreviation: 'VT'}, 
        {city:'Hà Nội',
         abbreviation:'HN'},
        {city:'TP.HCM',
         abbreviation:'HCM'},
        {city: 'Bình Dương',
         abbreviation:'BD'},
        {city:'Long An',
         abbreviation:'LA'}]

    const {register, handleSubmit} = useForm()

    function onHandleSubmit(data) {
        const date = new Date()
        const formatData = {
            "station_name":data.name,
            "station_status":'Đang xử lý',
            "station_date": date.toUTCString(),
            "station_location": data.city
        }
        data !== {} ? addStation({...dataState,
            "stations":[...dataState.stations, formatData]
        }) : addStation({...dataState})

        setState(false)
    }
    
  return (
    <form className='station-modal-container' onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="station-modal">
            <div className='station-modal-header'>
                <h2>Thêm trạm mới</h2>
            </div>
            <div className='table'>
                <label>Tên trạm</label>
                <input type='text' {...register('name', {required: true})} id='name'/>
                <label>Quận/Huyện</label>
                <select {...register('city')}>
                    {
                        cities.map((city) => {
                            if(city.abbreviation === dataState.project_city) {
                                return(
                                    <option value={city.city}>
                                        {city.city}
                                    </option>
                                )
                            }
                        })
                    }
                </select>
                <label>Tải lên</label>
                <input type='file' {...register('file')} />
            </div>
        </div>
        <div className='button-container'>
            <button className='cancel' onClick={() => setState(false)}>Hủy</button>
            <button type='submit' className='create'>Thêm trạm</button>
        </div>
    </form>
  )
}

export default StationModal