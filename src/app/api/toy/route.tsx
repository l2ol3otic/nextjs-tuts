import { NextResponse, NextRequest } from 'next/server';
import { toys } from '../../form/static'
import * as firebase from '../../../method/firebase'

export async function GET() {
  return NextResponse.json(toys);
}

export async function POST(req: NextRequest) {
  console.log(req.body)
  const data = await req.json();
  console.log('firebase_post : ', data)
  await firebase.addNewToy(data).then(res => console.log('sss :', res))
  return NextResponse.json({ 'status': 'success' });
}

export async function PUT() {
  return NextResponse.json(toys);
}

export async function DELETE() {
  return NextResponse.json(toys);
}