import { useParams } from 'react-router-dom'
import style from './BusinessDetail.module.css'
import Services from './Services/Services'
import LeaveAComment from '../../components/LeaveAComment/LeaveAComment'
// import Reviews from '../../components/Reviews/Reviews'
import BusinessInfo from './BusinessInfo/BusinessInfo'
import BusinessImages from './BusinessImages/BusinessImages'
import type { RootState } from '../../redux/types'
import { useEffect, useState, useRef } from 'react'
import { getSellerbyId } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import aprroved from '../../assets/approved.svg'
import failure from '../../assets/failure.svg'
import type { ServiceProvider } from '../../interfaces'

interface Notification {
  isOpen: boolean
  type: 'approved' | 'failure' | null
  content: string
}

const BusinessDetail = (): JSX.Element => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [notification, setNotification] = useState<Notification>({
    isOpen: false,
    type: null,
    content: ''
  })

  const sellerdetail = useSelector((state: RootState) => state.sellerdetail) as ServiceProvider

  useEffect(() => {
    dispatch(getSellerbyId(id))
  }, [dispatch, id])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const status = urlParams.get('status')
    if (status === 'approved') {
      setNotification({
        content: 'Payment approved',
        isOpen: true,
        type: 'approved'
      })
    } else if (status === 'failure') {
      setNotification({
        content: 'Payment failed',
        isOpen: true,
        type: 'failure'
      })
    }
    setTimeout(() => {
      setNotification({
        isOpen: false,
        type: null,
        content: ''
      })
    }, 3000)
  }, [])

  return (
    <div className={style['global-container']}>
      <BusinessInfo sellerName={sellerdetail.sellerName} rating={sellerdetail.reviews} />
      <BusinessImages />
      {/* <Services services={sellerdetail.servicesArray} sellerId={id} /> */}
      {/* <Reviews reviews={sellerdetail.reviews}/> */}

      {/* <LeaveAComment /> */}
      {notification.isOpen && (
        <div className={style.notification}>
          <div className={style['icon-container']} style={{ backgroundColor: notification.type === 'approved' ? '#00cc99' : '#ee4646' }}>
            <img src={notification.type === 'approved' ? aprroved : failure} alt='' width={25} height={25} />
          </div>
          <p>{notification.content}</p>
        </div>
      )}
    </div>
  )
}

export default BusinessDetail
