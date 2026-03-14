import React from 'react';
import PageHero from '../../components/common/PageHero';

const ToppersGallery = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-['Nunito']">
            <PageHero 
                title="Academic"
                italicTitle="Excellence"
                tag="Pride of Gyan Sagar"
                subtitle="Celebrating the brilliant minds who have set new benchmarks of success at Gyan Sagar Public School."
                bgImage="/GyanSagar/Student.jpg"
                accentColor="text-indigo-600"
            />
            <div className="py-20 px-4 max-w-7xl mx-auto">
                <p className="text-slate-600 text-xl font-medium leading-relaxed text-center">
                    Welcome to the Toppers Gallery. This section will be updated soon with interactive profiles of our top academic achievers.
                </p>
            </div>
        </div>
    );
};

export default ToppersGallery;
