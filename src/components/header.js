import React, {Component} from "react"
import styled from "@emotion/styled"
import NewLogo from "../images/logo_new.png"
import {Link} from "gatsby"

const Head = styled.div`
    top: 0px;
    overflow: hidden;
    padding: 25px 25px;
`   

const Logo = styled.img`
    width: 5em;
    height: 2.5em;
`

const Menu = styled.div`
    float: right;
`

const ItemNav = styled(Link)`
    color: #008080;
    padding-left: 2.5em;
    font-size: 1em;
    font-family: 'Adobe Gothic Std', san-serif;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: #B2D8D8;
    }
`

class Header extends Component {
    constructor(props) {
        super(props);
        this.activeClick = this.activeClick.bind(this);
        this.state = {
            active: false,
        }
    }

    activeClick() {
        const currentState = this.state.active;
        this.setState({ active : !currentState});
    }

    render() {
        return (
            <Head>
                <Logo src={NewLogo}></Logo>
                <Menu>
                    <ItemNav className={this.state.active ? "item_nav" : null} onClick={this.activeClick} to='#about'>about me</ItemNav>
                    <ItemNav className={this.state.active ? "item_nav" : null} onClick={this.activeClick} to='#projects'>projects</ItemNav>
                    <ItemNav className={this.state.active ? "item_nav" : null} onClick={this.activeClick} to='#contact'>contact me</ItemNav>
                </Menu>
            </Head>
        )
    }
}

export default Header;