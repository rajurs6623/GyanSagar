import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Loading component for Suspense
const PageLoader = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
    <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-4 shadow-sm" />
    <p className="text-slate-500 font-black text-xs uppercase tracking-widest animate-pulse">
      Gyan Sagar • Loading Experience
    </p>
  </div>
);

// Lazy loaded components
const Home = lazy(() => import("../pages/aboutUs/Home"));
const OurMission = lazy(() => import("../pages/aboutUs/OurMission"));
const YoungWritersPad = lazy(() => import("../pages/writingSpace/YoungWritersPad"));
const SchoolLibrary = lazy(() => import("../pages/books/SchoolLibrary"));
const ProfileDetail = lazy(() => import("../pages/authors/ProfileDetail"));
const BookDetails = lazy(() => import("../pages/books/BookDetails"));
const SignIn = lazy(() => import("../components/SignIn"));
const SignUp = lazy(() => import("../components/SignUp"));
const Account = lazy(() => import("../pages/Account"));
const OurStory = lazy(() => import("../pages/aboutUs/OurStory"));
const OurInfrastructure = lazy(() => import("../pages/aboutUs/OurInfrastructure"));
const PrimaryClasses = lazy(() => import("../pages/learning/PrimaryClasses"));
const HighSchool = lazy(() => import("../pages/learning/HighSchool"));
const SeniorSecondary = lazy(() => import("../pages/learning/SeniorSecondary"));
const CampusFacilities = lazy(() => import("../pages/learning/CampusFacilities"));
const DigitalClassrooms = lazy(() => import("../pages/learning/DigitalClassrooms"));
const ELearningPortal = lazy(() => import("../pages/learning/ELearningPortal"));
const Scholarships = lazy(() => import("../pages/learning/Scholarships"));
const AlumniNetwork = lazy(() => import("../pages/learning/AlumniNetwork"));
const IdeaNotebook = lazy(() => import("../pages/writingSpace/IdeaNotebook"));
const StoryCreator = lazy(() => import("../pages/writingSpace/StoryCreator"));
const IllustrationBoard = lazy(() => import("../pages/writingSpace/IllustrationBoard"));
const CreateBook = lazy(() => import("../pages/writingSpace/CreateBook"));
const AdmissionGuide = lazy(() => import("../pages/publishing/AdmissionGuide"));
const AdmissionInquiry = lazy(() => import("../pages/publishing/AdmissionInquiry"));
const SchoolUniform = lazy(() => import("../pages/publishing/SchoolUniform"));
const FeeStructure = lazy(() => import("../pages/publishing/FeeStructure"));
const PhotoGallery = lazy(() => import("../pages/books/PhotoGallery"));
const ToppersGallery = lazy(() => import("../pages/books/ToppersGallery"));
const StudyMaterial = lazy(() => import("../pages/books/StudyMaterial"));
const OurFaculty = lazy(() => import("../pages/authors/OurFaculty"));
const StudentAchievers = lazy(() => import("../pages/authors/StudentAchievers"));
const NoticeBoard = lazy(() => import("../pages/community/NoticeBoard"));
const SchoolTransport = lazy(() => import("../pages/community/SchoolTransport"));
const Events = lazy(() => import("../pages/community/Events"));
const ParentsPortal = lazy(() => import("../pages/community/ParentsPortal"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* About the School */}
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<OurMission />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/infrastructure" element={<OurInfrastructure />} />

        {/* Academics Wing */}
        <Route path="/primary-classes" element={<PrimaryClasses />} />
        <Route path="/senior-secondary" element={<SeniorSecondary />} />
        <Route path="/high-school" element={<HighSchool />} />
        <Route path="/campus-facilities" element={<CampusFacilities />} />
        <Route path="/digital-classrooms" element={<DigitalClassrooms />} />
        <Route path="/e-learning" element={<ELearningPortal />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/alumni" element={<AlumniNetwork />} />

        {/* School Portals */}
        <Route path="/writer-pad" element={<YoungWritersPad />} />
        <Route path="/idea-notebook" element={<IdeaNotebook />} />
        <Route path="/story-creator" element={<StoryCreator />} />
        <Route path="/illustration-board" element={<IllustrationBoard />} />
        <Route path="/create-book" element={<CreateBook />} />

        {/* Admission & Guidelines */}
        <Route path="/admission-guide" element={<AdmissionGuide />} />
        <Route path="/admission-inquiry" element={<AdmissionInquiry />} />
        <Route path="/school-uniform" element={<SchoolUniform />} />
        <Route path="/fee-structure" element={<FeeStructure />} />

        {/* School Life & Resources */}
        <Route path="/school-library" element={<SchoolLibrary />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/toppers-gallery" element={<ToppersGallery />} />
        <Route path="/study-material" element={<StudyMaterial />} />
        <Route path="/book/:id" element={<BookDetails />} />

        {/* Our People */}
        <Route path="/faculty" element={<OurFaculty />} />
        <Route path="/student-achievers" element={<StudentAchievers />} />
        <Route path="/profile-detail" element={<ProfileDetail />} />
        <Route path="/author/:id" element={<ProfileDetail />} />

        {/* Community & Alerts */}
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/school-transport" element={<SchoolTransport />} />
        <Route path="/events" element={<Events />} />
        <Route path="/parents-portal" element={<ParentsPortal />} />

        {/* Authentication */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />

        {/* Catch All */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
