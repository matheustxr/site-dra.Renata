
import SectionFourHome from "./Sections/SectionFour/SectionFourHome";
import SectionOneHome from "./Sections/SectionOne/SectionOneHome";
import SectionThreeHome from "./Sections/SectionThree/SectionThreeHome";
import SectionTwoHome from "./Sections/SectionTwo/SectionTwoHome";


export default function HomePage(){
    return (
        <>
            <SectionOneHome />
            <SectionTwoHome />
            <SectionThreeHome />
            <SectionFourHome />
        </>
    )
}