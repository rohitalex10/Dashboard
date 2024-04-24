import {
  faChartPie,
  faGauge,
} from '@fortawesome/free-solid-svg-icons'
import React, { PropsWithChildren } from 'react'
import { Badge } from 'react-bootstrap'
import SidebarNavItem from '@/app/ui/dashboard/Sidebar/SidebarNavItem'

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

export default function SidebarNav() {
  return (
    <ul className="list-unstyled">
      <SidebarNavItem icon={faGauge} href="/">
        Dashboard
        <small className="ms-auto"><Badge bg="info" className="ms-auto"></Badge></small>
      </SidebarNavItem>
      
      
      
    </ul>
  )
}
