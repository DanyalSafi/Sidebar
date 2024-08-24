// Transactions.tsx
"use client"

import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { MessageCircleQuestion, Bell, Settings } from "lucide-react";
import { columns, Payment } from './columns';
import { DataTable } from "./data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Function to fetch data (mock implementation here)
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      customer: "m@example.com",
      paymentMethod: "visa **** 4242",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },
    {
      id: "489e1d42",
      amount: 125,
      customer: "example@gmail.com",
      paymentMethod: "visa **** 5678",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },
    {
      id: "489e1d42",
      amount: 125,
      customer: "example@gmail.com",
      paymentMethod: "visa **** 5678",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },


    {
      id: "489e1d42",
      amount: 125,
      customer: "example@gmail.com",
      paymentMethod: "visa **** 5678",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },
    {
      id: "489e1d42",
      amount: 125,
      customer: "example@gmail.com",
      paymentMethod: "visa **** 5678",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },
    {
      id: "489e1d42",
      amount: 125,
      customer: "example@gmail.com",
      paymentMethod: "visa **** 5678",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },{
      id: "489e1d42",
      amount: 125,
      customer: "example@gmail.com",
      paymentMethod: "visa **** 5678",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },{
      id: "489e1d42",
      amount: 125,
      customer: "example@gmail.com",
      paymentMethod: "visa **** 5678",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },{
      id: "489e1d42",
      amount: 125,
      customer: "example@gmail.com",
      paymentMethod: "visa **** 5678",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },
    {
      id: "489e1d42",
      amount: 125,
      customer: "example@gmail.com",
      paymentMethod: "visa **** 5678",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },
    {
      id: "489e1d42",
      amount: 125,
      customer: "example@gmail.com",
      paymentMethod: "visa **** 5678",
      description: "Subscription Update",
      submissionDate: "2022-01-01",
      rel: "--"
    },
  ];
}

export default function Transactions() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className='p-5 flex justify-between'>
        <div className='flex items-center gap-8'>
          <div className='md:flex gap-3 items-center p-2 px-5 hidden'>
            <Search />
            <input 
              type='text' 
              placeholder='search' 
              className='outline-none bg-transparent' 
            />
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <h2 className='flex items-center text-lg'></h2>
          <Button className='bg-transparent hover:bg-slate-200 text-black'>Developers</Button>
          <h2 className='flex items-center text-sm bg-transparent'>Test Mode</h2>
          <Switch className='' />
          <MessageCircleQuestion className='h-5 w-5' />
          <Bell />
          <Settings />
          <DropdownMenu>
            <DropdownMenuTrigger className='border rounded-full w-7 h-7 bg-blue-500 text-white flex items-center justify-center'>+</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Online Payments</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Invoice</DropdownMenuItem>
              <DropdownMenuItem>Subscriptions</DropdownMenuItem>
              <DropdownMenuItem>Payment Link</DropdownMenuItem>
              <DropdownMenuItem>Payment</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className='p-5 flex justify-between'>
        <div className='flex items-center gap-8'>
          <div className='md:flex gap-3 items-center p-2 px-5 hidden'>
            <h2 className='text-xl font-bold'>Transactions</h2>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <DropdownMenu>
            <DropdownMenuTrigger className='bg-blue-500 border rounded-lg flex justify-center w-40 text-white'>+ Create Payment</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className='flex justify-between p-5'>
        <Card className='flex-1 mx-1 bg-transparent border border-blue-500'>
          <CardHeader>
            <CardTitle className='text-blue-500 text-md'>All</CardTitle>
            <CardDescription className='text-blue-500 text-sm'>387</CardDescription>
          </CardHeader>
        </Card>
        <Card className='flex-1 mx-1 bg-transparent'>
          <CardHeader>
            <CardTitle className='text-md'>Succeeded</CardTitle>
            <CardDescription className='text-sm'>359</CardDescription>
          </CardHeader>
        </Card>
        <Card className='flex-1 mx-1 bg-transparent'>
          <CardHeader>
            <CardTitle className='text-md'>Refunded</CardTitle>
            <CardDescription className='text-sm'>0</CardDescription>
          </CardHeader>
        </Card>
        <Card className='flex-1 mx-1 bg-transparent'>
          <CardHeader>
            <CardTitle className='text-md'>Failed</CardTitle>
            <CardDescription className='text-sm'>7</CardDescription>
          </CardHeader>
        </Card>
        <Card className='flex-1 mx-1 bg-transparent'>
          <CardHeader>
            <CardTitle className='text-md'>Uncaptured</CardTitle>
            <CardDescription className='text-sm'>0</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className='p-5'>
        <DataTable<Payment, keyof Payment> columns={columns} data={data} />
      </div>
    </div>
  )
}
