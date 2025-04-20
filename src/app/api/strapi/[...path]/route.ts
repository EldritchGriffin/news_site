import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request, { params }) {
  const token = process.env.STRAPI_API_TOKEN;
  const path =  await params.path?.join('/') || '';
  const query = request.nextUrl.searchParams.toString();
  const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}?${query}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  
  return NextResponse.json(response.data);
}