import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = '917979001951';

const AdmissionPopup = ({ manualShow, setManualShow }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        studentName: '',
        email: '',
        gender: '',
        phone: '',
        grade: '',
        address: ''
    });

    const grades = [
        'Nursery/NC', 'LKG', 'UKG',
        'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
        'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
        'Class 11', 'Class 12'
    ];

    useEffect(() => {
        if (manualShow) {
            setIsVisible(true);
        }
    }, [manualShow]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            const hasSeenPopup = sessionStorage.getItem('gs_admission_popup_seen');

            if (scrollPercent > 45 && !hasSeenPopup && !isVisible) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
        if (setManualShow) setManualShow(false);
        sessionStorage.setItem('gs_admission_popup_seen', 'true');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        const waMsg = encodeURIComponent(
            `*New Admission Inquiry – GS Registration*\n\n` +
            `👦 Student: ${formData.studentName}\n` +
            `📧 Email: ${formData.email || 'Not provided'}\n` +
            `👤 Gender: ${formData.gender}\n` +
            `📞 Contact: ${formData.phone}\n` +
            `📚 Class: ${formData.grade}\n` +
            `🏠 Address: ${formData.address}`
        );

        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`, '_blank');
            sessionStorage.setItem('gs_admission_popup_seen', 'true');
            setTimeout(() => {
                setIsVisible(false);
                if (setManualShow) setManualShow(false);
            }, 3000);
        }, 1200);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputStyle = "w-full border border-slate-300 rounded-xl px-5 py-3.5 text-sm font-bold text-slate-700 outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all placeholder:text-slate-400 placeholder:font-medium bg-slate-50/50";

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                    />

                    {/* Popup Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col pt-6 pb-10"
                    >
                        {/* Header Image/Text Section */}
                        <div className="px-6 md:px-10">
                             <div className="flex justify-end mb-2">
                                <button onClick={handleClose} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white transition-all">
                                    <X size={20} />
                                </button>
                            </div>
                            
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-2xl font-black text-indigo-600 tracking-[0.2em] mb-8 uppercase">GS Registration</h3>
                                
                                <div className="flex items-center justify-center gap-5 text-left bg-slate-50 p-4 rounded-3xl border border-slate-100">
                                    <img src="/icon.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md" />
                                    <div>
                                        <h4 className="text-lg md:text-xl font-black text-slate-800 leading-tight">GYAN SAGAR</h4>
                                        <p className="text-[10px] md:text-xs font-black text-indigo-600 mt-1 leading-tight uppercase tracking-widest">
                                            Public School • CBSE
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 md:px-10 overflow-y-auto max-h-[65vh]">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-3">
                                    <input 
                                        type="text" 
                                        name="studentName" 
                                        required 
                                        value={formData.studentName}
                                        onChange={handleChange}
                                        placeholder="Full Name" 
                                        className={inputStyle}
                                    />

                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email" 
                                        className={inputStyle}
                                    />

                                    <select 
                                        name="gender" 
                                        required 
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className={`${inputStyle} appearance-none cursor-pointer bg-white`}
                                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem' }}
                                    >
                                        <option value="">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        required 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Contact No." 
                                        className={inputStyle}
                                    />

                                    <select 
                                        name="grade" 
                                        required 
                                        value={formData.grade}
                                        onChange={handleChange}
                                        className={`${inputStyle} appearance-none cursor-pointer bg-white`}
                                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem' }}
                                    >
                                        <option value="">Select Class</option>
                                        {grades.map(g => <option key={g} value={g}>{g}</option>)}
                                    </select>

                                    <textarea 
                                        name="address" 
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="Address" 
                                        rows="3"
                                        className={`${inputStyle} resize-none`}
                                    />

                                    <div className="flex justify-center pt-2 pb-2">
                                        <button 
                                            type="submit" 
                                            disabled={isLoading}
                                            className="bg-green-800 text-white px-12 py-2 text-xl font-serif shadow-md hover:bg-green-900 transition-all active:scale-95 min-w-[140px]"
                                        >
                                            {isLoading ? "Sending..." : "Send"}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }} 
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center space-y-6"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-2xl font-serif font-bold text-green-800">Sent Successfully</h4>
                                        <p className="text-gray-500 font-medium text-sm">
                                            Confirming on WhatsApp...
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdmissionPopup;
