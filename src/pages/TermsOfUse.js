import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/smie-logo.png';
import '../App.css';
import { List } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function TermsOfUse() {
  return (
    <div className='App'>
      {/* Header */}
      <header className='App-header'>
        <Navbar
          fixed='top'
          bg='light'
          expand='lg'
          className='navbar'>
          <Container>
            <Navbar.Brand
              href='/'
              className='light'>
              <img
                src={logo}
                alt=''
                height={31}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
              <span className='light'>
                <List />
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link
                  href='/'
                  className='light'
                  id='nav-home'>
                  Home
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {/* End Header */}
      <section
        className='team-section'
        id='team-section'>
        <Container className='container App-team'>
          <header
            className='section-header'
            style={{
              marginBottom: '30px',
              borderBottom: '1px solid lightgrey',
            }}>
            <h1>Terms of Service</h1>
          </header>
          <div className='row'>
            <p>
              Please read these terms of service (“terms”, “terms of service”)
              carefully before using smalIislandict.com website (the “service”)
              operated by Small Island ICT (“us”, ‘we”, “our”).
            </p>
            <h4>Conditions of Use</h4>
            <p>
              We will provide their services to you, which are subject to the
              conditions stated below in this document. Every time you visit
              this website, use its services or make a purchase, you accept the
              following conditions. This is why we urge you to read them
              carefully.
            </p>
            <h4>Privacy Policy</h4>
            <p>
              Before you continue using our website we advise you to read our
              <Link to={'/privacy-policy'}>privacy policy</Link> regarding our
              user data collection. It will help you better understand our
              practices.
            </p>
            <h4>Copyright</h4>
            <p>
              Content published on this website (digital downloads, images,
              texts, graphics, logos) is the property of Small Island ICT and/or
              its content creators and protected by international copyright
              laws. The entire compilation of the content found on this website
              is the exclusive property of Small Island ICT, with copyright
              authorship for this compilation by Small Island ICT.
            </p>
            <h4>Communications</h4>
            <p>
              The entire communication with us is electronic. Every time you
              send us an email or visit our website, you are going to be
              communicating with us. You hereby consent to receive
              communications from us. If you subscribe to the news on our
              website, you are going to receive regular emails from us. We will
              continue to communicate with you by posting news and notices on
              our website and by sending you emails. You also agree that all
              notices, disclosures, agreements, and other communications we
              provide to you electronically meet the legal requirements that
              such communications be in writing.
            </p>
            <h4>Applicable Law</h4>
            <p>
              By visiting this website, you agree that the laws of Canada,
              without regard to principles of conflict laws, will govern these
              terms of service, or any dispute of any sort that might come
              between Small Island ICT and you, or its business partners and
              associates.
            </p>
            <h4>Disputes</h4>
            <p>
              Any dispute related in any way to your visit to this website or to
              products you purchase from us shall be arbitrated by state or
              federal court in Canada Small Island ICT and you consent to
              exclusive jurisdiction and venue of such courts.
            </p>
            <h4>Comments, Reviews, and Emails</h4>
            <p>
              Visitors may post content as long as it is not obscene, illegal,
              defamatory, threatening, infringing of intellectual property
              rights, invasive of privacy, or injurious in any other way to
              third parties. Content has to be free of software viruses,
              political campaigns, and commercial solicitation.
            </p>
            <p>
              We reserve all rights (but not the obligation) to remove and/or
              edit such content. When you post your content, you grant [name]
              non-exclusive, royalty-free and irrevocable right to use,
              reproduce, publish, modify such content throughout the world in
              any media.
            </p>
            <h4>License and Site Access</h4>
            <p>
              We grant you a limited license to access and make personal use of
              this website. You are not allowed to download or modify it. This
              may be done only with written consent from us.
            </p>
            <h4>User Account</h4>
            <p>
              If you are an owner of an account on this website, you are solely
              responsible for maintaining the confidentiality of your private
              user details (username and password). You are responsible for all
              activities that occur under your account or password.
            </p>
            <p>
              We reserve all rights to terminate accounts, edit or remove
              content and cancel orders at their sole discretion.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
