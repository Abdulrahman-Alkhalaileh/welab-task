'use client'
import { Card, CardProps } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import TodoThemeContext from "@/app/context/TodoThemeContext";

const MyCard: React.FC<CardProps> = ({ children }) => {

  const {theme} =useContext(TodoThemeContext)

  return (
    <Card sx={{ 
        p: 2 ,width: '100%',display: 'flex', px: {xs: 1,sm: 2},
        alignItems: 'center', justifyContent:'space-between',
        borderRadius: 3, backgroundColor: theme=='dark' ? '#4a3a4f' : 'white ',
        color: theme=='dark' ? '#bdbbbb': 'black'
        }}>
      {children}
    </Card>
  );
};

export default MyCard;