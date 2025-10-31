# Agridrive Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Architecture](#architecture)
4. [Features](#features)
5. [API Reference](#api-reference)
6. [Hardware Setup](#hardware-setup)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

## Introduction

Agridrive is a comprehensive smart agricultural automation system designed to revolutionize traditional farming practices through the integration of AI/ML, IoT sensors, and autonomous machinery.

### Key Objectives

- Optimize resource utilization (water, fertilizer, energy)
- Automate field operations with minimal human intervention
- Maximize crop yield and profitability
- Reduce environmental impact through precision agriculture
- Enable data-driven decision making for farmers

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/suvankar200/agridrive.git

# Navigate to project directory
cd agridrive

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# API Keys
WEATHER_API_KEY=your_weather_api_key

# Other configurations
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Architecture

### System Components

```
┌─────────────────────────────────────────────┐
│           Web Application (Next.js)          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │   UI     │  │   API    │  │  Auth    │  │
│  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│              MongoDB Database                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Sensor  │  │   Crop   │  │  User    │  │
│  │   Data   │  │   Data   │  │   Data   │  │
│  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────┐
│        Raspberry Pi 4/5 (Edge Device)       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Control │  │  Sensors │  │  Motors  │  │
│  │  System  │  │   IoT    │  │  Servos  │  │
│  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────┘
```

### Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Hardware**: Raspberry Pi 4/5
- **ML/AI**: TensorFlow/PyTorch for crop disease detection
- **IoT**: MQTT protocol for sensor communication

## Features

### 1. Autonomous Navigation

The system uses advanced algorithms for:

- Path planning and optimization
- Obstacle detection and avoidance
- GPS-based field mapping
- Real-time position tracking

### 2. Evapotranspiration (ET) Calculation

Precise irrigation management through:

- Real-time ET computation using Penman-Monteith equation
- Soil moisture sensor integration
- Weather data integration
- Automated irrigation scheduling

### 3. Weather Integration

Adaptive operations based on:

- Current weather conditions
- 7-day weather forecasts
- Temperature and humidity monitoring
- Rainfall prediction

### 4. Crop Health Monitoring

AI-powered analysis including:

- Disease detection using computer vision
- Growth stage identification
- Nutrient deficiency detection
- Pest infestation alerts

### 5. IoT Dashboard

Comprehensive monitoring with:

- Real-time sensor data visualization
- Historical data analytics
- Alerts and notifications
- Remote control capabilities

## API Reference

### Sensor Data API

```typescript
// GET /api/sensors
// Get all sensor data
Response: {
  sensors: Array<{
    id: string;
    type: string;
    value: number;
    unit: string;
    timestamp: Date;
  }>;
}

// POST /api/sensors
// Add new sensor reading
Request: {
  sensorId: string;
  value: number;
  timestamp: Date;
}
```

### Weather API

```typescript
// GET /api/weather
// Get current weather data
Response: {
  temperature: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  forecast: Array<WeatherData>;
}
```

### Crop Data API

```typescript
// GET /api/crops
// Get crop information
Response: {
  crops: Array<{
    id: string;
    type: string;
    plantedDate: Date;
    expectedHarvest: Date;
    health: string;
  }>;
}
```

## Hardware Setup

### Required Components

1. **Raspberry Pi 4/5**

   - Quad-core processor
   - Minimum 4GB RAM
   - 32GB microSD card

2. **Sensors**

   - Soil moisture sensors (DHT22 or similar)
   - Temperature/Humidity sensors
   - pH sensors
   - Light sensors

3. **Actuators**

   - Water pumps
   - Servo motors for navigation
   - Solenoid valves

4. **Communication**
   - WiFi module
   - GPS module (NEO-6M or similar)

### Wiring Diagram

```
Raspberry Pi GPIO Connections:
- GPIO 17 → Soil Moisture Sensor (Data)
- GPIO 27 → Temperature Sensor (Data)
- GPIO 22 → Water Pump (Control)
- GPIO 23 → Servo Motor (PWM)
- GPIO 24 → LED Indicator
```

### Software Installation on Raspberry Pi

```bash
# Update system
sudo apt-get update
sudo apt-get upgrade

# Install Python dependencies
pip3 install RPi.GPIO
pip3 install Adafruit_DHT
pip3 install paho-mqtt

# Clone control scripts
git clone https://github.com/suvankar200/agridrive-pi.git
cd agridrive-pi

# Run setup script
python3 setup.py
```

## Deployment

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t agridrive .
docker run -p 3000:3000 agridrive
```

## Troubleshooting

### Common Issues

#### Issue: Build fails with TypeScript errors

**Solution**: Run `npm run lint` and fix type errors

#### Issue: MongoDB connection timeout

**Solution**: Check MongoDB URI and network connectivity

#### Issue: Sensor data not updating

**Solution**: Verify Raspberry Pi is online and MQTT broker is running

#### Issue: Images not loading

**Solution**: Check that images are in `/public/photos` directory

### Debug Mode

Enable debug logging:

```bash
DEBUG=* npm run dev
```

### Getting Help

- Email: agridrive06@gmail.com
- GitHub Issues: https://github.com/suvankar200/agridrive/issues
- Documentation: https://agridrive.vercel.app

## Performance Optimization

### Best Practices

1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Implement dynamic imports
3. **Caching**: Use Redis for frequently accessed data
4. **CDN**: Deploy static assets to CDN

### Monitoring

Use tools like:

- Vercel Analytics for web vitals
- MongoDB Atlas monitoring for database
- New Relic for application performance

---

For more information, visit our website at [https://agridrive.vercel.app](https://agridrive.vercel.app)
