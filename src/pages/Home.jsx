import React from 'react';
import HeroSlider from '../components/UI/HeroSlider';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import FindCarForm from '../components/UI/FindCarForm';
import '../Styles/FindCarForm.css';
import AboutSection from '../components/UI/AboutSection';
import ServicesList from '../components/UI/ServicesList';
import CartItem from '../components/UI/CartItem';
import cartData from '../assets/data/carData';
import BecomeDriver from '../components/UI/BecomeDriver';
import Testimonial from '../components/UI/Testimonial';
import BlogList from '../components/UI/BlogList';

function Home() {
	return (
		<>
			<Helmet title='Home'>
				<section className='p-0 hero_slider_section'>
					<HeroSlider />
					<section className='hero_form'>
						<Container>
							<Row className='form_row'>
								<Col lg='4' md='4'>
									<div className='find_cars-lift'>
										<h2>Find your best car here</h2>
									</div>
								</Col>
								<Col lg='8' md='8' sm='12'>
									<FindCarForm />
								</Col>
							</Row>
						</Container>
					</section>
				</section>
				{/* _____________________ about section ______________ */}
				<AboutSection />
				{/* ________________________________ services section ___________ */}
				<section>
					<Container>
						<Row>
							<Col lg='12' className='mb-5 text-center'>
								<h6 className='section_subtitle'>See Our</h6>
								<h2 className='section_title'>Popular Services</h2>
							</Col>
							<ServicesList />
						</Row>
					</Container>
				</section>
				{/* _______________________________ car offer section  ________________________________ */}
				<section>
					<Container>
						<Row>
							<Col lg='12' className='text-center' mb-5>
								<h6 className='section_subtitle'>Come with</h6>
                <h2 className="section_title">Hot Offers</h2>
							</Col>
              {cartData.slice(0,6).map((item)=><CartItem item={item} key={item.id}/>)}
						</Row>
					</Container>
				</section>
        {/* _________________________ become a driver ___________________ */}
        <BecomeDriver/>
        {/* ________________________ testimonial section ________________________ */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className='text-center mb-4 pt-3'>
                <h6 className="section_subtitle">
                  Our clients says
                </h6>
                <h2 className="section_title">Tetimonials</h2>
                <Testimonial/>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ________________________________________ blog section ___________________ */}
        <section>
          <Container>
            <Row>
              <Col lg="12" className='text-center mb-5 pt-3'>
                <h6 className="section_subtitle">
                 Explore our blogs
                </h6>
                <h2 className="section_title">Latest Blogs</h2>
                
              </Col>
              <BlogList/>
              

            </Row>
          </Container>
        </section>
        
			</Helmet>
		</>
	);
}

export default Home;
