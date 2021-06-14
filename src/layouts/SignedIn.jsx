import React from 'react'
import { Menu,Dropdown,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://lh3.googleusercontent.com/ogw/ADea4I4MPNTPif-rCUgLmmOdHzp0Dy2UCkjHHdPsxQmm8g=s32-c-mo"></Image>
                <Dropdown pointing="top left" text="Fatih">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
            )
}
