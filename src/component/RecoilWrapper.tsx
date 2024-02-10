'use client';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react'

const RecoilWrapper = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return <RecoilRoot>
        <Suspense>
          {children}
        </Suspense>
    </RecoilRoot>
}

export default RecoilWrapper
