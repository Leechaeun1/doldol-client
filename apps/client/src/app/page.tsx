"use client";

import { CommonLayout } from "@/components/layout/CommonLayout";
import { DetailFunctions } from "@/containers/landing/DetailFunction";
import ReviewSectionContainer from "@/containers/landing/ReviewSection";
import { IntroSection } from "@/containers/landingPage/IntroSection";
import { FAQSection } from "@/containers/landingPage/FAQSection";

function Home() {
  return (
    <CommonLayout isLogoVisible>
      {/* 인트로 섹션 */}
      <IntroSection />

      {/* 핵심기능 설명 섹션 */}
      <DetailFunctions />

      {/* 사용자 후기 섹션 */}

      <ReviewSectionContainer />

      {/* FAQ 섹션 */}
      <FAQSection />
    </CommonLayout>
  );
}

export default Home;
