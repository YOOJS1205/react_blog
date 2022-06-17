import React from 'react'
import './footer.css';
import Wrapper from '../Wrapper/Wrapper';
import TopBtn from './TopBtn/TopBtn';

export default function Footer() {
  return (
    <footer>
        <Wrapper>
            <h2>©Weniv Corp.</h2>
            <TopBtn />
        </Wrapper>
    </footer>
  )
}
