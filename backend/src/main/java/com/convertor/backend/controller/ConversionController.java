package com.convertor.backend.controller;

import com.convertor.backend.model.ConversionRequest;
import com.convertor.backend.model.ConversionResponse;
import com.convertor.backend.service.UnitConversionService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/convert")
@CrossOrigin(origins = "http://localhost:5173")
public class ConversionController {
    private final UnitConversionService unitConversionService;

    public ConversionController(UnitConversionService unitConversionService){
        this.unitConversionService = unitConversionService;
    }
    @PostMapping("/length")
    public ConversionResponse convertLength(@RequestBody ConversionRequest request){
    double inputValue = request.getValue();
    String fromUnit = request.getFromUnit();
    String toUnit = request.getToUnit();
    double resultValue = unitConversionService.convertLength(inputValue,fromUnit,toUnit);
    ConversionResponse response = new ConversionResponse();
    response.setResult(resultValue);
    return response;
    }

    @PostMapping("/weight")
    public ConversionResponse convertWeight(@RequestBody ConversionRequest request){
        double inputValue = request.getValue();
        String fromUnit = request.getFromUnit();
        String toUnit = request.getToUnit();
        double resultValue = unitConversionService.convertWeight(inputValue,fromUnit,toUnit);
        ConversionResponse response = new ConversionResponse();
        response.setResult(resultValue);
        return  response;
    }
    @PostMapping("/temperature")
    public ConversionResponse convertTemperature(@RequestBody ConversionRequest request) {
        double inputValue = request.getValue();
        String fromUnit = request.getFromUnit();
        String toUnit = request.getToUnit();

        double resultValue = unitConversionService.convertTemperature(inputValue, fromUnit, toUnit);

        ConversionResponse response = new ConversionResponse();
        response.setResult(resultValue);
        return response;
    }

}
