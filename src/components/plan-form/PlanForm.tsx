import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// Styles
import { CheckBox, Container, Header, Note, OfferList, PlanColumn, PlanColumnName, PlanItem as PI, PlanItemDevice, StyledButton } from './PlanForm.styles'
// Icons
import CheckIcon from '@mui/icons-material/Check';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import ComputerIcon from '@mui/icons-material/Computer';
import TvIcon from '@mui/icons-material/Tv';

enum PlanType {
    MOBILE,
    BASIC,
    STANDARD,
    PREMIUM,
}

type PlantItemProps = {
    plan: PlanType,
    children?: React.ReactNode | string,
}

function PlanForm() {

    const [choosedPlan, setChoosedPlan] = useState<PlanType>(PlanType.BASIC);

    function choosingPlanHandler(plan: PlanType) {
        setChoosedPlan(plan);
    }

    const PlanItem: React.FC<PlantItemProps> = ({ plan, children }) => {
        return (
            <PI onClick={() => choosingPlanHandler(plan)} checked={choosedPlan === plan}>
                {children}
            </PI>
        )
    }

    return (
        <Container>
            <Header>
                <span className="steps">Step <strong>2</strong> of <strong>3</strong></span>
                <h1 className="heading">Choose the plan that's right for you.</h1>
            </Header>
            <OfferList>
                <li className="offer-item">
                    <CheckIcon className="list-bullet" />
                    <span className="list-content">Watch all you want. Ad-free.</span>
                </li>
                <li className="offer-item">
                    <CheckIcon className="list-bullet" />
                    <span className="list-content">Recommendations just for you.</span>
                </li>
                <li className="offer-item">
                    <CheckIcon className="list-bullet" />
                    <span className="list-content">Change or cancel your plan anytime.</span>
                </li>
            </OfferList>
            <form>
                <PlanColumn>
                    <PlanColumnName />
                    <CheckBox>
                        <label>Mobile</label>
                        <input
                            type="checkbox"
                            onChange={_ => setChoosedPlan(PlanType.MOBILE)}
                            checked={choosedPlan === PlanType.MOBILE} />
                        <span className="bg-red" />
                    </CheckBox>
                    <CheckBox>
                        <label>Basic</label>
                        <input
                            type="checkbox"
                            onChange={_ => setChoosedPlan(PlanType.BASIC)}
                            checked={choosedPlan === PlanType.BASIC} />
                        <span className="bg-red" />
                    </CheckBox>
                    <CheckBox>
                        <label>Standard</label>
                        <input
                            type="checkbox"
                            onChange={_ => setChoosedPlan(PlanType.STANDARD)}
                            checked={choosedPlan === PlanType.STANDARD} />
                        <span className="bg-red" />
                    </CheckBox>
                    <CheckBox>
                        <label>Premium</label>
                        <input
                            type="checkbox"
                            onChange={_ => setChoosedPlan(PlanType.PREMIUM)}
                            checked={choosedPlan === PlanType.PREMIUM} />
                        <span className="bg-red" />
                    </CheckBox>
                </PlanColumn>
                <PlanColumn>
                    <PlanColumnName>Monthly price</PlanColumnName>
                    <PlanItem plan={PlanType.MOBILE}>$4.99</PlanItem>
                    <PlanItem plan={PlanType.BASIC}>$9.99</PlanItem>
                    <PlanItem plan={PlanType.STANDARD}>$12.49</PlanItem>
                    <PlanItem plan={PlanType.PREMIUM}>$14.99</PlanItem>
                </PlanColumn>
                <PlanColumn>
                    <PlanColumnName>Video Quality</PlanColumnName>
                    <PlanItem plan={PlanType.MOBILE}>Good</PlanItem>
                    <PlanItem plan={PlanType.BASIC}>Good</PlanItem>
                    <PlanItem plan={PlanType.STANDARD}>Better</PlanItem>
                    <PlanItem plan={PlanType.PREMIUM}>Best</PlanItem>
                </PlanColumn>
                <PlanColumn>
                    <PlanColumnName>Resolution</PlanColumnName>
                    <PlanItem plan={PlanType.MOBILE}>480p</PlanItem>
                    <PlanItem plan={PlanType.BASIC}>480p</PlanItem>
                    <PlanItem plan={PlanType.STANDARD}>1080p</PlanItem>
                    <PlanItem plan={PlanType.PREMIUM}>4K+HDR</PlanItem>
                </PlanColumn>
                <PlanColumn>
                    <PlanColumnName>Device you can use to watch</PlanColumnName>
                    <PlanItem plan={PlanType.MOBILE}><TwoDevices /></PlanItem>
                    <PlanItem plan={PlanType.BASIC}><FourDevices /></PlanItem>
                    <PlanItem plan={PlanType.STANDARD}><FourDevices /></PlanItem>
                    <PlanItem plan={PlanType.PREMIUM}><FourDevices /></PlanItem>
                </PlanColumn>
            </form>
            <div>
                <Note>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <Link to="#">Terms of Use</Link> for more details.</Note>
                <Note>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</Note>
            </div>
            <StyledButton>Next</StyledButton>
        </Container>
    )
}

export default PlanForm

const TwoDevices: React.FC = () => {
    return (
        <React.Fragment>
            <PlanItemDevice>
                <PhoneIphoneIcon />
                <label>Phone</label>
            </PlanItemDevice>
            <PlanItemDevice>
                <TabletMacIcon className="tablet" />
                <label>Tablet</label>
            </PlanItemDevice>
        </React.Fragment>
    )
}

const FourDevices: React.FC = () => {
    return (
        <React.Fragment>
            <PlanItemDevice>
                <PhoneIphoneIcon />
                <label>Phone</label>
            </PlanItemDevice>
            <PlanItemDevice>
                <TabletMacIcon className="tablet" />
                <label>Tablet</label>
            </PlanItemDevice>
            <PlanItemDevice>
                <ComputerIcon />
                <label>Computer</label>
            </PlanItemDevice>
            <PlanItemDevice>
                <TvIcon />
                <label>TV</label>
            </PlanItemDevice>
        </React.Fragment>
    )
}