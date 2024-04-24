import Link from 'next/link'
import { Container } from 'react-bootstrap'
import HeaderSidebarToggler from '@/app/ui/dashboard/Header/HeaderSidebarToggler'
import HeaderFeaturedNav from '@/app/ui/dashboard/Header/HeaderFeaturedNav'
import HeaderNotificationNav from '@/app/ui/dashboard/Header/HeaderNotificationNav'
import HeaderProfileNav from '@/app/ui/dashboard/Header/HeaderProfileNav'

export default function Header() {
  return (
    

    <header className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        <HeaderSidebarToggler />
        <Link href="/" className="header-brand d-md-none">
          <svg width="80" height="46">
            <title>Dashboard</title>
            <use xlinkHref="/assets/brand/coreui.svg#full" />
          </svg>
        </Link>
        <div className="header-nav d-none d-md-flex">
          <HeaderFeaturedNav />
        </div>
        <div className="header-nav ms-auto">
          <HeaderNotificationNav />
        </div>
        <div className="header-nav ms-2">
          <HeaderProfileNav />
        </div>
      </Container>
      <div className="header-divider border-top my-2 mx-sm-n2" />
      <Container fluid>
      <div className="container">
    <div className="box">
        <h4>Track Player Stats</h4>
        <br />
        <div className="row no-gutters">
            <div className="col-8">
                <input type="text" className="form-control" placeholder="Gamertag" id="gamertag" />
            </div>
            <div className="col-4">
                <select className="custom-select" id="platform">
                    <option selected>Choose Platform</option>
                    <option value="pc">pc</option>
                    <option value="xbox">xbox</option>
                    <option value="psn">psn</option>
                </select>
            </div>
        </div>
        <br />
        <button className="btn btn-primary" id="submit">Submit</button>

    </div>
    <div className="result"></div>
</div>

        
      </Container>
    </header>
  )
}
