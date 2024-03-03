import Link from "next/link";
import { Box, Container, Stack } from "@mui/material";
import { FaQuestion } from "react-icons/fa";

const AboutQuestionMark = () => {
    return (
        <Box  sx={{position: 'fixed',bottom: "15px", right: '10px'}}>
            <Link href={'./about'}>
                <FaQuestion color="#db7485" size={40}/>
            </Link>
        </Box>
    )
}

export default AboutQuestionMark
