"use client"
import { Box, Stack, Typography, alpha, styled } from '@mui/material'
import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { LuListTodo } from "react-icons/lu";
import TodoThemeContext from '../context/TodoThemeContext';

const Header = () => {

  const { theme, setTheme } = useContext(TodoThemeContext)

  function handleTheme(){
      theme==='light'?setTheme('dark'): setTheme('light')
  }

    const PinkSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: '#db7485',
          '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: pink[600],
        },
      }));

    return (
        <header >
            <Box sx={{
                p: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems:'center',
                backgroundColor: theme=='dark'? '#150030': '#f0f0f0'
            }}>
                <Link href={'/'}>
                    <Stack direction={'row'}  spacing={1} display={'flex'} alignItems={'center'}>
                            <LuListTodo size={47} style={{color: theme=='dark'? '#db7485' : 'black'}}/> {/*color='#753f48'  */}
                            <Typography variant='h1' fontWeight={600} fontSize={'32px'} 
                            sx={{
                                    display: {xs: 'none',sm: 'block', md: 'block'},
                                    color: theme=='dark'? '#bdbbbb': 'black'
                                }}>
                                    Welab Todo
                            </Typography>
                    </Stack>
                </Link>
                <PinkSwitch checked={theme=='dark'} onChange={handleTheme}/>
            </Box>
        </header>
    )
}

export default Header
