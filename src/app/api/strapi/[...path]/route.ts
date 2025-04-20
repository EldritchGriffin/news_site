import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request, { params }) {
  const token = process.env.STRAPI_API_TOKEN;
  const path = params.path?.join('/') || '';
  
  const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  
  return NextResponse.json(response.data);
}