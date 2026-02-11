import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useStudio } from '../../context/StudioContext';
import { allPrograms } from '../../data/programsData';

const BookingForm = () => {
  const { selectedProgram, setSelectedProgram } = useStudio();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  
  const watchedProgram = watch('program');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if (dateInput) {
      dateInput.setAttribute('min', today);
    }
  }, []);

  // Find selected program details
  const getSelectedProgramDetails = () => {
    if (watchedProgram) {
      return allPrograms.find(p => p.id === parseInt(watchedProgram));
    }
    return selectedProgram;
  };

  const currentProgram = getSelectedProgramDetails();

  const onSubmit = (data) => {
    const selectedProg = allPrograms.find(p => p.id === parseInt(data.program));
    const programName = selectedProg?.name || selectedProgram?.name || 'Not selected';
    
    // Format WhatsApp message
    const message = `🧘‍♀️ DAYZ Studio Booking Enquiry

Program: ${programName}
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Date: ${data.date}
Time: ${data.timeSlot === 'morning' ? 'Morning (8 AM - 12 PM)' : 
        data.timeSlot === 'afternoon' ? 'Afternoon (12 PM - 4 PM)' : 
        'Evening (4 PM - 8 PM)'}
Level: ${data.experience === 'beginner' ? 'Beginner' : 
        data.experience === 'intermediate' ? 'Intermediate' : 
        'Advanced'}

📍 HSR Layout, Bengaluru`;

    // WhatsApp URL - NO ICON, JUST CLEAN REDIRECT
    const whatsappUrl = `https://wa.me/918861616622?text=${encodeURIComponent(message)}`;
    
    // Reset form and redirect to homepage
    reset();
    navigate('/');
    
    // Open WhatsApp directly
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="booking-card fade-in-up">
      {/* Show selected program if coming from modal */}
      {selectedProgram && (
        <div className="selected-program">
          <div 
            className="selected-program-icon" 
            dangerouslySetInnerHTML={{ __html: selectedProgram.icon }} 
          />
          <div className="selected-program-info">
            <div className="selected-program-name">{selectedProgram.name}</div>
            <div className="selected-program-desc">{selectedProgram.desc}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* PROGRAM DROPDOWN - NO PRICES SHOWN */}
        <div className="form-group">
          <label className="form-label">Select Program</label>
          <select 
            className="form-select" 
            {...register('program', { required: 'Please select a program' })}
            defaultValue={selectedProgram?.id || ''}
          >
            <option value="">Choose a program</option>
            <optgroup label="Yoga">
              {allPrograms.filter(p => p.id <= 7).map(program => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Dance">
              {allPrograms.filter(p => p.id >= 8 && p.id <= 16).map(program => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Zumba">
              {allPrograms.filter(p => p.id >= 17 && p.id <= 18).map(program => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Arts & Music">
              {allPrograms.filter(p => p.id >= 19).map(program => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </optgroup>
          </select>
          {errors.program && <span style={{ color: '#e76b3c', fontSize: '12px' }}>{errors.program.message}</span>}
        </div>

        {/* Show program details when selected - NO PRICE */}
        {currentProgram && (
          <div style={{ 
            background: 'rgba(111, 198, 192, 0.1)', 
            padding: '16px', 
            borderRadius: '12px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div dangerouslySetInnerHTML={{ __html: currentProgram.icon }} style={{ width: '40px', height: '40px' }} />
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{currentProgram.name}</div>
                <div style={{ fontSize: '14px', opacity: 0.7 }}>{currentProgram.duration} • {currentProgram.intensity}</div>
              </div>
            </div>
          </div>
        )}

        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-input" 
            placeholder="Enter your full name"
            {...register('fullName', { required: 'Name is required' })}
          />
          {errors.fullName && <span style={{ color: '#e76b3c', fontSize: '12px' }}>{errors.fullName.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input 
            type="email" 
            className="form-input" 
            placeholder="Enter your email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <span style={{ color: '#e76b3c', fontSize: '12px' }}>{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input 
            type="tel" 
            className="form-input" 
            placeholder="Enter your phone number"
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter valid 10-digit number'
              }
            })}
          />
          {errors.phone && <span style={{ color: '#e76b3c', fontSize: '12px' }}>{errors.phone.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Preferred Date</label>
          <input 
            type="date" 
            className="form-input" 
            id="date"
            {...register('date', { required: 'Date is required' })}
          />
          {errors.date && <span style={{ color: '#e76b3c', fontSize: '12px' }}>{errors.date.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Time Slot</label>
          <select 
            className="form-select" 
            {...register('timeSlot', { required: 'Time slot is required' })}
          >
            <option value="">Select a time</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 8 PM)</option>
          </select>
          {errors.timeSlot && <span style={{ color: '#e76b3c', fontSize: '12px' }}>{errors.timeSlot.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Experience Level</label>
          <select 
            className="form-select" 
            {...register('experience', { required: 'Experience level is required' })}
          >
            <option value="">Select level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          {errors.experience && <span style={{ color: '#e76b3c', fontSize: '12px' }}>{errors.experience.message}</span>}
        </div>

        {/* ENQUIRE BUTTON - NO ICON, NO ALERT, DIRECT WHATSAPP */}
        <button type="submit" className="submit-btn" style={{ background: '#0f1f1a' }}>
          ENQUIRE
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
