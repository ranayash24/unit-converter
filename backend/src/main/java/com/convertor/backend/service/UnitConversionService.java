package com.convertor.backend.service;

import com.convertor.backend.model.LengthUnit;
import com.convertor.backend.model.TemperatureUnit;
import com.convertor.backend.model.WeightUnit;
import org.springframework.stereotype.Service;

@Service
public class UnitConversionService {
    public double convertLength(double value,String fromUnitName, String toUnitName){
        LengthUnit from = LengthUnit.valueOf(fromUnitName);
        LengthUnit to = LengthUnit.valueOf(toUnitName);

        double valueInMeters = value* from.getFactorToMeter();
        double result = valueInMeters/to.getFactorToMeter();

        return result;
    }
    public double convertWeight(double value, String fromUnitName, String toUnitName){
        WeightUnit from = WeightUnit.valueOf(fromUnitName);
        WeightUnit to = WeightUnit.valueOf(toUnitName);

        double valueInKilo = value*from.getFactorToKilo();
        double result = valueInKilo/to.getFactorToKilo();
        return result;
    }

    public double convertTemperature(double value, String fromUnitName, String toUnitName){
        TemperatureUnit from = TemperatureUnit.valueOf(fromUnitName);
        TemperatureUnit to = TemperatureUnit.valueOf(toUnitName);
        double result = value;

        if(from == TemperatureUnit.CELSIUS){
            result = value;
        }
        else if(from == TemperatureUnit.FAHRENHEIT){
            result = (value-32)*5/9;
        }
        else if (from == TemperatureUnit.KELVIN) {
            result = value-273.15;
        }

        if (to == TemperatureUnit.CELSIUS){
            return result;
        }
        else if (to == TemperatureUnit.FAHRENHEIT){
            return (result*9/5)+32;
        }
        else if( to == TemperatureUnit.KELVIN){
            return result+273.15;
        }
        return result;
    }
}
