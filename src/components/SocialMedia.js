import React from "react"
import styled from "@emotion/styled"
import LinkedIn from "../images/linkedin_circle.png"
import GitHub from "../images/github-circle.png"
import Facebook from "../images/facebook_circle.png"
import Instagram from "../images/instagram_circle.png"
import Email from "../images/email_circle.png"
import {Link} from "gatsby"


const Container = styled.div`
    margin: 0 auto;
`

const List = styled.div`
    padding-top: 20vh;
    padding-left: 40px;   
`

const Item = styled(Link)`
    padding-right: 20px;
`

const Icon = styled.img`
    width: 23px;
    height: 23px;
`

const SocialMedia = () => {
    return (
        <Container>
            <List>
                <Item>
                    <Icon src={LinkedIn}/>
                </Item>
                <Item>
                    <Icon src={GitHub}/>
                </Item>
                <Item>
                    <Icon src={Facebook}/>
                </Item>
                <Item>
                    <Icon src={Instagram}/>
                </Item>
                <Item>
                    <Icon src={Email}/>
                </Item>
            </List>
        </Container>
    )
}

export default SocialMedia;