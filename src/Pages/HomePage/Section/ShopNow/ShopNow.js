import React from 'react';
import { Link } from "react-router-dom";
import {Layout,LayoutWrapper, LayoutImg, Paragraph} from './ShopNow.style';
import img1 from './../../../../Assets/Images/jpg/img1.jpg';
import Button from './../../../../Components/Button/Button';

function ShopNow(){
    return(
        <LayoutWrapper>
            <LayoutImg src = {img1}/>
            <Layout className='box'>
                <h2>Grains</h2>
                <Paragraph>There will be some description about the crop.</Paragraph>
                <div>
                <Button>
                    <Link to = "/LogIn"> Shop Now</Link>
                </Button>
                </div>
            </Layout>
        </LayoutWrapper>
    );
}
export default ShopNow;