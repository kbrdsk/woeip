import * as React from 'react'
import { FooterLink } from 'components/Footer/types'
import * as Elements from 'components/Footer/elements'

const footerLinks: Array<FooterLink> = [
  { name: 'WOAQ on GitHub', url: 'https://github.com/openoakland/woeip' },
  { name: 'OpenOakland', url: 'https://openoakland.org' },
  { name: 'WOEIP', url: 'https://woeip.org' }
]

const Footer: React.FunctionComponent = () => {
  const footerItems = footerLinks.map((link: FooterLink) => (
    <li key={link.name}>
      <Elements.ExternalLink href={link.url}>{link.name}</Elements.ExternalLink>
    </li>
  ))
  return (
    <Elements.Container>
      <Elements.Content>
        <Elements.LinkList>{footerItems}</Elements.LinkList>
      </Elements.Content>
    </Elements.Container>
  )
}

export default Footer
