package com.convertor.backend.model;

public enum WeightUnit {
    MILLIGRAM(0.000001),
    GRAM(0.001),
    KILOGRAM(1.0),
    OUNCE(0.0283495),
    POUND(0.453592);
    private final  double FactorToKilo;
    WeightUnit(double FactorToKilo){
        this.FactorToKilo = FactorToKilo;
    }
    public double getFactorToKilo(){
        return  FactorToKilo;
    }
}
