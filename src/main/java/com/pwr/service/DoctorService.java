package com.pwr.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pwr.mappers.DoctorMapper;
import com.pwr.model.DoctorTO;
import com.pwr.model.DoctorEntity;
import com.pwr.repository.DoctorRepository;

@Service
public class DoctorService implements IDoctorService {

	@Autowired
	private DoctorRepository doctorRepository;

	@Override
	public List<DoctorTO> findAllDoctors() {
		List<DoctorTO> result = new ArrayList<>();
		doctorRepository.findAll().forEach(doctorEntity -> result.add(DoctorMapper.mapDoctor(doctorEntity)));
		return result;
	}

	@Override
	public void createDoctor(DoctorEntity doctor) {
		doctorRepository.save(doctor);
	}

	@Override
	public void updateDoctor(DoctorEntity doctor) {
		doctorRepository.save(doctor);

	}

	@Override
	public void deleteDoctor(DoctorEntity doctor) {
		doctorRepository.delete(doctor);

	}
}
