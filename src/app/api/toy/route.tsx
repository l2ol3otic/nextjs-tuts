import { NextResponse } from 'next/server';
import { toys } from '../../form/static'

export async function GET() {
  return NextResponse.json(toys);
}

export async function POST() {
  return NextResponse.json(toys);
}

export async function PUT() {
  return NextResponse.json(toys);
}

export async function DELETE() {
  return NextResponse.json(toys);
}