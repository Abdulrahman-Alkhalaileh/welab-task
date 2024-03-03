import { Stack, Typography } from '@mui/material'
import React from 'react'
import MyCard from '../components/shared/MyCard'
import Link from 'next/link'

const AboutPage = () => {
    return (
        <Stack mx={'auto'} p={4}  alignItems={'center'} maxWidth={'1100px'}>
            <MyCard>
                <Stack spacing={4} width={'100%'} p={4}>
                    <Typography variant='h5' fontWeight={'700'} width={'100%'} textAlign={'center'}>
                        About this project
                    </Typography>
                    <Stack spacing={3}>
                        <Typography variant='body1' fontWeight={600}>
                            This is NextJS Todo App where user can perform a CRUD operations on the todo
                        </Typography>
                        <Typography variant='body1' fontWeight={600}>
                            What are the fetures of this Project:
                        </Typography>
                        <ul style={{listStyle: 'none'}}>
                            <li>- NextJS project using TypeScript and MUI</li>
                            <li>- Responsive design</li>
                            <li>- Context saved in the LocalStorage and components used it from there</li>
                            <li>- Filter functionality based on the completion status of the the todos</li>
                            <li>- User can add, delete, edit and sign todo as completed</li>
                            <li>- Toggle theme dark-light and Its data stored in LocalStorage</li>
                        </ul>
                        <Typography variant='body1' fontWeight={500}>
                            <span style={{fontWeight: 'bold'}}>Created by:</span> Abdulrahman Alkhalaileh
                        </Typography>
                        <Typography variant='body1' fontWeight={500}>
                            checkout the source code of this project at 
                            <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                                <a href="https://github.com/Abdulrahman-Alkhalaileh/welab-task" target='_blank'> GitHub repository</a>
                            </span>
                        </Typography>
                        <Typography variant='body1' fontWeight={700} sx={{textDecoration: 'underline'}}>
                            <Link href='/'>Back to home</Link>
                        </Typography>

                    </Stack>
                </Stack>
            </MyCard>
        </Stack>
    )
}

export default AboutPage
