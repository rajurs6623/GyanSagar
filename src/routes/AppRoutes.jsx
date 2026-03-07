import React from "react";
import { Routes, Route } from "react-router-dom";

// About Us
import Home from "../pages/aboutUs/Home";
import OurStory from "../pages/aboutUs/OurStory";
import OurPublisher from "../pages/aboutUs/OurPublisher";

// Learning & Knowledge
import KnowledgeStore from "../pages/learning&Knowledge/KnowledgeStore";
import ReadingLibrary from "../pages/learning&Knowledge/ReadingLibrary";
import WritingStages from "../pages/learning&Knowledge/WritingStages";

// Writing Space
import YoungWritersPad from "../pages/writingSpace/YoungWritersPad";
import CreateBook from "../pages/writingSpace/CreateBook";
import LearnerAsWriter from "../pages/learnerAsWriter/LearnerAsWriter";
import StoryBookStructure from "../pages/learnerAsWriter/StoryBookStructure";
import StoryCategoryView from "../pages/learnerAsWriter/StoryCategoryView";
import StoryCreator from "../pages/learnerAsWriter/StoryCreator";

// Publishing
import PublishYourBook from "../pages/publishing/PublishYourBook";

// Books & Authors
import BookMarketplace from "../pages/books&Authors/bookMarketplace";
import OurAuthors from "../pages/books&Authors/ourAuthors";

const AppRoutes = () => {
    return (
        <Routes>
            {/* About Us */}
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/publisher" element={<OurPublisher />} />

            {/* Learning & Knowledge */}
            <Route path="/store" element={<KnowledgeStore />} />
            <Route path="/library" element={<ReadingLibrary />} />
            <Route path="/writing-stages" element={<WritingStages />} />

            {/* Writing Space */}
            <Route path="/writer-pad" element={<YoungWritersPad />} />
            <Route path="/create-book" element={<CreateBook />} />
            <Route path="/learner-as-writer" element={<LearnerAsWriter />} />
            <Route path="/story-structure" element={<StoryBookStructure />} />
            <Route path="/story-categories" element={<StoryCategoryView />} />
            <Route path="/story-creator" element={<StoryCreator />} />

            {/* Publishing */}
            <Route path="/publish" element={<PublishYourBook />} />

            {/* Books & Authors */}
            <Route path="/marketplace" element={<BookMarketplace />} />
            <Route path="/authors" element={<OurAuthors />} />
        </Routes>
    );
};

export default AppRoutes;
