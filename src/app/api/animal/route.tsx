import { NextResponse } from 'next/server';
import { animalLists } from '../../../app/routing-detail/static'

export async function GET() {
  return NextResponse.json(animalLists);
}