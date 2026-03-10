import React from "react";
import { Routes, Route } from "react-router-dom";

// Pre-existing Custom Pages
import Home from "../pages/aboutUs/Home";
import OurMission from "../pages/aboutUs/OurMission";
import YoungWritersPad from "../pages/writingSpace/YoungWritersPad";
import BookMarketplace from "../pages/books/BookMarketplace";
import AuthorProfile from "../pages/authors/AuthorProfile";
import BookDetails from "../pages/books/BookDetails";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Account from "../pages/Account";



// Pre-existing Pages matching Navbar Structure
import OurStory from "../pages/aboutUs/OurStory";
import OurPublisher from "../pages/aboutUs/OurPublisher";

import WhatIsWriting from "../pages/learning/WhatIsWriting";
import WhatIsStorytelling from "../pages/learning/WhatIsStorytelling";
import WritingBasics from "../pages/learning/WritingBasics";
import WritingStages from "../pages/learning/WritingStages";
import StoryStructure from "../pages/learning/StoryStructure";
import BookStructure from "../pages/learning/BookStructure";
import GrammarGuide from "../pages/learning/GrammarGuide";
import WritingTips from "../pages/learning/WritingTips";
import FamousAuthors from "../pages/learning/FamousAuthors";

import IdeaNotebook from "../pages/writingSpace/IdeaNotebook";
import StoryCreator from "../pages/writingSpace/StoryCreator";
import ChapterCreator from "../pages/writingSpace/ChapterCreator";
import IllustrationBoard from "../pages/writingSpace/IllustrationBoard";
import CreateBook from "../pages/writingSpace/CreateBook";

import HowToPublish from "../pages/publishing/HowToPublish";
import PublishYourBook from "../pages/publishing/PublishYourBook";
import CopyrightGuide from "../pages/publishing/CopyrightGuide";
import BookPricingGuide from "../pages/publishing/BookPricingGuide";

import NewBooks from "../pages/books/NewBooks";
import TopRatedBooks from "../pages/books/TopRatedBooks";
import BookCategories from "../pages/books/BookCategories";

import OurAuthors from "../pages/authors/OurAuthors";
import StudentAuthors from "../pages/authors/StudentAuthors";

import WritingChallenges from "../pages/community/WritingChallenges";
import StoryCompetitions from "../pages/community/StoryCompetitions";
import Events from "../pages/community/Events";
import DiscussionForum from "../pages/community/DiscussionForum";

const AppRoutes = () => {
    return (
        <Routes>
            {/* About */}
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<OurMission />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/publisher" element={<OurPublisher />} />

            {/* Learning */}
            <Route path="/what-is-writing" element={<WhatIsWriting />} />
            <Route path="/what-is-storytelling" element={<WhatIsStorytelling />} />
            <Route path="/writing-basics" element={<WritingBasics />} />
            <Route path="/writing-stages" element={<WritingStages />} />
            <Route path="/story-structure" element={<StoryStructure />} />
            <Route path="/book-structure" element={<BookStructure />} />
            <Route path="/grammar-guide" element={<GrammarGuide />} />
            <Route path="/writing-tips" element={<WritingTips />} />
            <Route path="/famous-authors" element={<FamousAuthors />} />

            {/* Writing Space */}
            <Route path="/writer-pad" element={<YoungWritersPad />} />
            <Route path="/idea-notebook" element={<IdeaNotebook />} />
            <Route path="/story-creator" element={<StoryCreator />} />
            <Route path="/chapter-creator" element={<ChapterCreator />} />
            <Route path="/illustration-board" element={<IllustrationBoard />} />
            <Route path="/create-book" element={<CreateBook />} />

            {/* Publishing */}
            <Route path="/how-to-publish" element={<HowToPublish />} />
            <Route path="/publish" element={<PublishYourBook />} />
            <Route path="/copyright-guide" element={<CopyrightGuide />} />
            <Route path="/book-pricing-guide" element={<BookPricingGuide />} />

            {/* Books */}
            <Route path="/marketplace" element={<BookMarketplace />} />
            <Route path="/new-books" element={<NewBooks />} />
            <Route path="/top-rated-books" element={<TopRatedBooks />} />
            <Route path="/book-categories" element={<BookCategories />} />
            <Route path="/book/:id" element={<BookDetails />} />

            {/* Authors */}
            <Route path="/authors" element={<OurAuthors />} />
            <Route path="/student-authors" element={<StudentAuthors />} />
            <Route path="/author-profiles" element={<AuthorProfile />} />
            <Route path="/author/:id" element={<AuthorProfile />} />

            {/* Community */}
            <Route path="/challenges" element={<WritingChallenges />} />
            <Route path="/competitions" element={<StoryCompetitions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/forum" element={<DiscussionForum />} />

            {/* Auth */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} />



            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;
