package com.convertor.backend.model;

public enum LengthUnit {
    MILLIMETER(0.001),
    CENTIMETER(0.01),
    METER(1.0),
    KILOMETER(1000.0),
    INCH(0.0254),
    FOOT(0.3048),
    YARD(0.9144),
    MILE(1609.34);
    private final double factorToMeter;
    LengthUnit(double factorToMeter) {
        this.factorToMeter = factorToMeter;
    }
    public double getFactorToMeter() {
        return factorToMeter;
    }

}
