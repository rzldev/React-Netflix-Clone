import React, { useEffect } from 'react'
// Styles
import { Banner, Body, EnterEmail, Feature, Heading, Description, ButtonSubmit } from './Landing.styles';
// Icons
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// Hooks
import useInput, { useInputRules } from '../../hooks/use-input';
// Components
import Footer, { FooterNavItem } from '../../components/footer/Footer';
import LoadingSpinner from '../../components/ui/loading-spinner/LoadingSpinner';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { uiAction, NavbarType } from '../../store/slices/ui-slice';
import { checkEmailExists } from '../../store/actions/auth-action';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();

    const authLoading = useSelector((state: RootState) => state.auth.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(uiAction.setNavbarType(NavbarType.BEFORE_LOGIN));
    });

    const rules = useInputRules();
    const email = useInput([rules.emailIsEmpty, rules.emailInvalid]);

    const emailFormValid = email.inputIsValid;

    async function submitFormHandler(event?: React.FormEvent): Promise<void> {
        event?.preventDefault();

        if (emailFormValid) {
            dispatch(checkEmailExists({
                email: email.value,
                onSuccess: (emailExists) => {
                    if (emailExists) {
                        navigate('/signin');
                    } else {
                        navigate('/signup/registration');
                    }
                },
                onError: (message) => {
                    console.log(message);
                }
            }));
        }
    }

    return (
        <React.Fragment>
            {/* Body */}
            <Body>
                {/* Banner */}
                <Banner>
                    <img src="/assets/landing-banner.jpeg" alt="landing-banner" />

                    <div>
                        <Heading>Unlimited movies, TV shows, and more.</Heading>
                        <Description>Watch anywhere. Cancel anytime.</Description>

                        {/* Sign Up Form */}
                        <EnterEmail>
                            <label className="form-label">Ready to watch? Enter your email to create or restart your membership.</label>
                            <form className="email-form" onSubmit={submitFormHandler}>
                                <div className="email-input-control">
                                    <input
                                        className="email-input"
                                        type="email"
                                        placeholder="Email address"
                                        value={email.value}
                                        onChange={(e) => email.inputChangeHandler(e.target.value)}
                                        onBlur={email.inputBlurHandler} />
                                    <p className="error">{(!email.isValid) && email.errorMessage}</p>
                                </div>
                                <ButtonSubmit isLoading={authLoading} onClick={submitFormHandler} disabled={!emailFormValid || authLoading}>
                                    <label className="submit-label">
                                        <span>Get Started</span>
                                        <ChevronRightIcon />
                                    </label>
                                    {
                                        authLoading && (
                                            <span className="loading"><LoadingSpinner size="32" color="white" /></span>
                                        )
                                    }
                                </ButtonSubmit>
                            </form>
                        </EnterEmail>
                    </div>
                </Banner>

                {/* Feature Enjoy */}
                <Feature isTextOnRight={false}>
                    <div className="feature-header">
                        <Heading>Enjoy on your TV.</Heading>
                        <Description>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Description>
                    </div>
                    <div className="feature-body">
                        <img src="/assets/feature-enjoy.png" alt="enjoy-on-your-tv" />
                        <div className="home-video">
                            <video autoPlay muted loop>
                                <source src="/assets/tv-video.m4v" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </Feature>

                {/* Feature Download */}
                <Feature isTextOnRight={true}>
                    <div className="feature-header">
                        <Heading>Download your shows to watch offline.</Heading>
                        <Description>Save your favorites easily and always have something to watch.</Description>
                    </div>
                    <div className="feature-body">
                        <img src="/assets/feature-download.jpeg" alt="enjoy-on-your-tv" />
                        <div className="download-state">
                            <div>
                                <img className="download-state-left" src="/assets/stranger-things-cover.png" alt="stranger-things-cover" />
                                <div className="download-state-right">
                                    <h6 className="stranger-things">Stranger Things</h6>
                                    <p className="downloading">Downloading...</p>
                                </div>
                                <img src="/assets/download-animation.gif" alt="download-animation" />
                            </div>
                        </div>
                    </div>
                </Feature>

                {/* Feature Watch */}
                <Feature isTextOnRight={false}>
                    <div className="feature-header">
                        <Heading>Watch everywhere.</Heading>
                        <Description>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Description>
                    </div>
                    <div className="feature-body">
                        <img src="/assets/feature-watch.png" alt="enjoy-on-your-tv" />
                        <div className="teaser-video">
                            <video autoPlay muted loop>
                                <source src="/assets/stranger-things-video.m4v" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </Feature>

                {/* Feature Kids */}
                <Feature isTextOnRight={true}>
                    <div className="feature-header">
                        <Heading>Create profiles for kids.</Heading>
                        <Description>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</Description>
                    </div>
                    <div className="feature-body">
                        <img src="/assets/feature-kids.png" alt="enjoy-on-your-tv" />
                    </div>
                </Feature>

                {/* Footer */}
                <Footer>
                    <FooterNavItem>FAQ</FooterNavItem>
                    <FooterNavItem>Help Center</FooterNavItem>
                    <FooterNavItem>Account</FooterNavItem>
                    <FooterNavItem>Media Center</FooterNavItem>
                    <FooterNavItem>Investor Relations</FooterNavItem>
                    <FooterNavItem>Jobs</FooterNavItem>
                    <FooterNavItem>Redeem Gift Cards</FooterNavItem>
                    <FooterNavItem>Buy Gift Cards</FooterNavItem>
                    <FooterNavItem>Ways to Watch</FooterNavItem>
                    <FooterNavItem>Terms of Use</FooterNavItem>
                    <FooterNavItem>Privacy</FooterNavItem>
                    <FooterNavItem>Cookie Preferences</FooterNavItem>
                    <FooterNavItem>Corporate Information</FooterNavItem>
                    <FooterNavItem>Contact Us</FooterNavItem>
                    <FooterNavItem>Speed Test</FooterNavItem>
                    <FooterNavItem>Legal Notices</FooterNavItem>
                    <FooterNavItem>Only on Netflix</FooterNavItem>
                </Footer>
            </Body>
        </React.Fragment>
    )
}

export default Landing;