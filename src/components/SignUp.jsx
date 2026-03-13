import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaUser, FaLock, FaEnvelope, FaMobileAlt,
    FaMapMarkerAlt, FaCity, FaGlobe, FaLanguage,
    FaBuilding, FaArrowRight, FaArrowLeft, FaCheck
} from "react-icons/fa";

const InputField = ({ icon: Icon, type, name, value, onChange, placeholder, colSpan = false, error }) => (
    <div className={`relative ${colSpan ? 'sm:col-span-2' : ''}`}>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/70 z-10">
            <Icon size={16} />
        </div>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full bg-white/5 border ${error ? 'border-red-400 bg-red-400/5' : 'border-white/10'} rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-blue-400 outline-none transition-all text-sm font-semibold backdrop-blur-sm`}
            required
        />
        {error && (
            <p className="text-red-400 text-xs font-bold mt-1 ml-2 absolute -bottom-5">{error}</p>
        )}
    </div>
);

const SignUp = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        motherTongue: "",
        password: "",
        address: "",
        pincode: "",
        city: "",
        district: "",
        state: "",
        country: ""
    });
    const [errors, setErrors] = useState({});
    const [isFetchingLocation, setIsFetchingLocation] = useState(false);
    const navigate = useNavigate();

    // Background Image URL (Optimized)
    const bgImage = "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=60&w=1600";

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Custom formatting per field
        let formattedValue = value;
        if (name === "mobile") {
            // Enforce max 10 digits
            formattedValue = value.replace(/\D/g, '').slice(0, 10);
        } else if (name === "firstName" || name === "lastName") {
            // Prevent numbers from being entered
            formattedValue = value.replace(/[0-9]/g, '');
        } else if (name === "pincode") {
            // Allow only numbers and max 6 digits
            formattedValue = value.replace(/\D/g, '').slice(0, 6);
        }

        setFormData((prev) => ({ ...prev, [name]: formattedValue }));

        // Clear error as user types
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleFetchLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsFetchingLocation(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await response.json();
                    if (data && data.address) {
                        setFormData((prev) => ({
                            ...prev,
                            pincode: data.address.postcode || prev.pincode,
                            /* map varied road parameters from nominatim */
                            address: data.address.road || data.address.suburb || data.address.neighbourhood || prev.address,
                            city: data.address.city || data.address.town || data.address.village || prev.city,
                            district: data.address.state_district || data.address.county || prev.district,
                            state: data.address.state || prev.state,
                            country: data.address.country || prev.country
                        }));

                        // Clear all step 2 errors since we mapped the data
                        setErrors((prev) => {
                            const newErr = { ...prev };
                            delete newErr.pincode;
                            delete newErr.address;
                            delete newErr.city;
                            delete newErr.district;
                            delete newErr.state;
                            delete newErr.country;
                            return newErr;
                        });
                    }
                } catch (error) {
                    console.error("Error fetching location details:", error);
                    alert("Failed to fetch address details. Please enter manually.");
                } finally {
                    setIsFetchingLocation(false);
                }
            },
            (error) => {
                console.error("Error obtaining location:", error);
                alert("Permission to access location was denied or failed.");
                setIsFetchingLocation(false);
            }
        );
    };

    const validateStep1 = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Surname is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Mobile must be 10 digits";
        }

        if (!formData.motherTongue) newErrors.motherTongue = "Please select mother tongue";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        let newErrors = {};
        if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.district.trim()) newErrors.district = "District is required";
        if (!formData.state.trim()) newErrors.state = "State is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep1()) setStep(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep2()) {
            setTimeout(() => {
                navigate("/signin");
            }, 600); // Faster redirect
        }
    };

    return (
        <div 
          className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 sm:p-8 font-['Nunito'] overflow-hidden relative"
          style={{ backgroundImage: `url(${bgImage})` }}
        >

            {/* ── WARM AMBER-BROWN OVERLAY ──────────────────────────────── */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1005]/75 via-[#2a1a08]/70 to-[#1a0f05]/75 z-0" />

            {/* ── BACKGROUND MAGIC ──────────────────────────────────────── */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-sky-200/30 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-pink-200/30 blur-[120px] rounded-full"
                />
            </div>

            {/* ── MAIN CONTAINER ────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl w-full bg-black/10 backdrop-blur-md rounded-[48px] shadow-[0_40px_100px_-20px_rgba(180,83,9,0.3)] flex flex-col overflow-hidden border border-amber-200/25 relative z-10"
            >
                {/* ── FORM AREA ──────────────────────────────── */}
                <div className="w-full bg-transparent p-8 sm:p-12 md:p-14 flex flex-col justify-center relative">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="mb-8 text-center lg:text-left relative z-10"
                    >
                        <motion.h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none mb-2 whitespace-nowrap">
                            Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Account</span>
                        </motion.h1>
                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-2 mt-2 text-blue-400/80 font-semibold tracking-widest uppercase text-[10px]"
                        >
                            Gyan Sagar Public School Portal • Step {step} of 2
                        </motion.div>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="flex flex-col relative z-10">
                        {/* STEP 1: PERSONAL DETAILS */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-8">
                                    <InputField icon={FaUser} type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" error={errors.firstName} />
                                    <InputField icon={FaUser} type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Surname" error={errors.lastName} />
                                    <InputField icon={FaEnvelope} type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" colSpan={true} error={errors.email} />
                                    <InputField icon={FaMobileAlt} type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Alternate Mobile (Optional)" error={errors.mobile} />
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/70 z-10">
                                            <FaLanguage size={16} />
                                        </div>
                                        <select
                                            name="motherTongue"
                                            value={formData.motherTongue}
                                            onChange={handleInputChange}
                                            className={`w-full bg-white/5 border ${errors.motherTongue ? 'border-red-400 bg-red-400/5' : 'border-white/10'} rounded-2xl py-3.5 pl-12 pr-10 ${!formData.motherTongue ? 'text-white/40' : 'text-white'} appearance-none focus:bg-white/10 focus:border-blue-400 outline-none transition-all text-sm font-semibold backdrop-blur-sm cursor-pointer`}
                                            required
                                        >
                                            <option value="" disabled className="text-gray-300 bg-[#3f4b66]">Select Mother Tongue</option>
                                            <option value="English" className="text-white bg-[#3f4b66] py-2">English</option>
                                            <option value="Hindi" className="text-white bg-[#3f4b66] py-2">Hindi</option>
                                            <option value="Telugu" className="text-white bg-[#3f4b66] py-2">Telugu</option>
                                            <option value="Tamil" className="text-white bg-[#3f4b66] py-2">Tamil</option>
                                            <option value="Marathi" className="text-white bg-[#3f4b66] py-2">Marathi</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none transition-transform group-hover:text-blue-400">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                        </div>
                                        {errors.motherTongue && <p className="text-red-400 text-xs font-bold mt-1 ml-2 absolute -bottom-5">{errors.motherTongue}</p>}
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2"
                                    >
                                        Next Step <FaArrowRight size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: ADDRESS DETAILS */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-8">
                                    <InputField icon={FaMapMarkerAlt} type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="Pincode" colSpan={true} error={errors.pincode} />
                                    <InputField icon={FaBuilding} type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Flat / Home no. / Building name" colSpan={true} error={errors.address} />
                                    <InputField icon={FaCity} type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" error={errors.city} />
                                    <InputField icon={FaMapMarkerAlt} type="text" name="district" value={formData.district} onChange={handleInputChange} placeholder="District" error={errors.district} />
                                    <InputField icon={FaBuilding} type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="State" error={errors.state} />
                                    <InputField icon={FaGlobe} type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Country" error={errors.country} />

                                    <button
                                        type="button"
                                        onClick={handleFetchLocation}
                                        disabled={isFetchingLocation}
                                        className="sm:col-span-2 flex items-center justify-center gap-2 bg-pink-500/10 border border-pink-400/30 text-pink-300 rounded-2xl py-3 mt-2 text-sm font-semibold hover:bg-pink-500/20 transition-all disabled:opacity-50 disabled:cursor-wait"
                                    >
                                        {isFetchingLocation ? (
                                            <svg className="animate-spin h-4 w-4 text-pink-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : (
                                            <FaMapMarkerAlt />
                                        )}
                                        {isFetchingLocation ? 'Fetching Location...' : 'Use Current Location'}
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                                    >
                                        <FaArrowLeft size={14} /> Previous
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2"
                                    >
                                        <FaCheck size={14} /> Submit
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </form>

                    {/* Footer Links */}
                    <div className="mt-8 pt-6 text-center lg:text-left relative z-10 border-t border-sky-200/20">
                        <p className="text-sky-100/80 font-medium text-sm">
                            Already have an account?{" "}
                            <Link to="/signin" className="text-blue-400 font-bold underline decoration-blue-400/50 decoration-2 underline-offset-4">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
                body { background: #f8fbff; }
                input::-ms-reveal,
                input::-ms-clear {
                  display: none;
                }
            `}</style>
        </div>
    );
};

export default SignUp;
