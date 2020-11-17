{
    "header": {
        "pipelineVersion": "2.2",
        "releaseVersion": "2019.2.0",
        "fileVersion": "1.1",
        "nodesVersions": {
            "DepthMap": "2.0",
            "DepthMapFilter": "3.0",
            "MeshFiltering": "2.0",
            "CameraInit": "2.0",
            "FeatureExtraction": "1.1",
            "Meshing": "3.0",
            "StructureFromMotion": "2.0",
            "Texturing": "5.0",
            "FeatureMatching": "2.0",
            "ImageMatching": "1.0",
            "PrepareDenseScene": "3.0"
        }
    },
    "graph": {
        "CameraInit_1": {
            "nodeType": "CameraInit",
            "position": [
                0,
                0
            ],
            "parallelization": {
                "blockSize": 0,
                "size": 29,
                "split": 1
            },
            "uids": {
                "0": "93812e40f09b0119b6c537dcd638d72fb89636f0"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "viewpoints": [
                    {
                        "viewId": 102670176,
                        "poseId": 102670176,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4500.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:32\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.496491\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:32\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:32\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.53757\", \"Exif:SubsecTimeDigitized\": \"429\", \"Exif:SubsecTimeOriginal\": \"429\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.166667\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.319\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"2.3072\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"2.3072\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.09\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 110927913,
                        "poseId": 110927913,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4486.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:19\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"1.14743\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:19\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:19\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"4.03254\", \"Exif:SubsecTimeDigitized\": \"151\", \"Exif:SubsecTimeOriginal\": \"151\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.0625\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"283.799\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"283.799\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 226275780,
                        "poseId": 226275780,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4492.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:24\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.457217\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:24\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:24\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.87716\", \"Exif:SubsecTimeDigitized\": \"310\", \"Exif:SubsecTimeOriginal\": \"310\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.142857\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"311.295\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"311.295\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 256285827,
                        "poseId": 256285827,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4510.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:42\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-1.68205\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:42\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:42\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.11699\", \"Exif:SubsecTimeDigitized\": \"654\", \"Exif:SubsecTimeOriginal\": \"654\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.25\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.314\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"315.139\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"315.139\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.07\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 31.99\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 299671668,
                        "poseId": 299671668,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4509.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:41\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-1.20258\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:41\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:41\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.01671\", \"Exif:SubsecTimeDigitized\": \"876\", \"Exif:SubsecTimeOriginal\": \"876\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.25\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.314\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"321.152\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"321.152\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.07\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 31.99\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 309740009,
                        "poseId": 309740009,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4506.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:38\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-1.16332\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:38\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:38\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.46995\", \"Exif:SubsecTimeDigitized\": \"030\", \"Exif:SubsecTimeOriginal\": \"030\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.166667\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.314\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"334.856\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"334.856\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.07\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 31.99\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 409553434,
                        "poseId": 409553434,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4513.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:45\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-2.52624\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:45\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:45\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"125\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.01897\", \"Exif:SubsecTimeDigitized\": \"933\", \"Exif:SubsecTimeOriginal\": \"933\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.25\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.318\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"314.201\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"314.201\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.04\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.07\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 414352411,
                        "poseId": 414352411,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4497.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:29\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.666528\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:29\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:29\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.44741\", \"Exif:SubsecTimeDigitized\": \"352\", \"Exif:SubsecTimeOriginal\": \"352\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.2\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"357.018\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"357.018\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 496963888,
                        "poseId": 496963888,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4501.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:33\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.662337\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:33\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:33\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.58491\", \"Exif:SubsecTimeDigitized\": \"341\", \"Exif:SubsecTimeOriginal\": \"341\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.166667\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.319\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"349.888\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"349.888\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.09\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 531343626,
                        "poseId": 531343626,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4489.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:21\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"0.684812\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:21\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:21\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"3.90693\", \"Exif:SubsecTimeDigitized\": \"600\", \"Exif:SubsecTimeOriginal\": \"600\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.0666667\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"295.524\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"295.524\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 639295990,
                        "poseId": 639295990,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4505.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:36\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.920482\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:36\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:36\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.38379\", \"Exif:SubsecTimeDigitized\": \"988\", \"Exif:SubsecTimeOriginal\": \"988\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.2\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.319\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"334.754\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"334.754\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.09\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 672676255,
                        "poseId": 672676255,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4507.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:39\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-1.28389\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:39\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:39\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.28285\", \"Exif:SubsecTimeDigitized\": \"035\", \"Exif:SubsecTimeOriginal\": \"035\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.2\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.314\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"334.309\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"334.309\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.07\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 31.99\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 709932971,
                        "poseId": 709932971,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4493.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:25\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.548879\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:25\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:25\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.71042\", \"Exif:SubsecTimeDigitized\": \"342\", \"Exif:SubsecTimeOriginal\": \"342\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.142857\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"318.069\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"318.069\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 720973286,
                        "poseId": 720973286,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4504.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:36\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-1.10187\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:36\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:36\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.26347\", \"Exif:SubsecTimeDigitized\": \"142\", \"Exif:SubsecTimeOriginal\": \"142\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.2\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.319\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"338.408\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"338.408\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.09\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 792862714,
                        "poseId": 792862714,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4511.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:43\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-2.09796\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:43\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:43\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.01897\", \"Exif:SubsecTimeDigitized\": \"658\", \"Exif:SubsecTimeOriginal\": \"658\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.25\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.314\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"312.88\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"312.88\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.07\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 31.99\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 922122282,
                        "poseId": 922122282,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4495.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:27\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.691025\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:27\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:27\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.60916\", \"Exif:SubsecTimeDigitized\": \"287\", \"Exif:SubsecTimeOriginal\": \"287\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.166667\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"331.97\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"331.97\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 942203377,
                        "poseId": 942203377,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4490.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:22\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"0.383689\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:22\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:22\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"3.68461\", \"Exif:SubsecTimeDigitized\": \"526\", \"Exif:SubsecTimeOriginal\": \"526\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.0769231\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"297.924\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"297.924\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 980643039,
                        "poseId": 980643039,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4502.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:34\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.864914\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:34\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:34\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.53757\", \"Exif:SubsecTimeDigitized\": \"343\", \"Exif:SubsecTimeOriginal\": \"343\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.166667\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.319\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"343.689\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"343.689\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.09\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1014246226,
                        "poseId": 1014246226,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4488.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:20\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"0.906255\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:20\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:20\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"4.03254\", \"Exif:SubsecTimeDigitized\": \"778\", \"Exif:SubsecTimeOriginal\": \"778\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.0625\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"292.248\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"292.248\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1066765408,
                        "poseId": 1066765408,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4503.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:35\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-1.11558\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:35\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:35\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.40448\", \"Exif:SubsecTimeDigitized\": \"192\", \"Exif:SubsecTimeOriginal\": \"192\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.2\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.319\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"342.988\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"342.988\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.09\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1170445293,
                        "poseId": 1170445293,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4499.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:31\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.43428\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:31\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:31\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.53757\", \"Exif:SubsecTimeDigitized\": \"425\", \"Exif:SubsecTimeOriginal\": \"425\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.166667\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.319\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"9.45638\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"9.45638\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.09\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1174899266,
                        "poseId": 1174899266,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4512.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:44\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-2.39335\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:44\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:44\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.01897\", \"Exif:SubsecTimeDigitized\": \"798\", \"Exif:SubsecTimeOriginal\": \"798\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.25\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.318\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"308.861\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"308.861\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.04\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.07\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1375386192,
                        "poseId": 1375386192,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4508.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:40\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-1.64099\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:40\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:40\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.28285\", \"Exif:SubsecTimeDigitized\": \"066\", \"Exif:SubsecTimeOriginal\": \"066\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.2\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.314\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"331.009\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"331.009\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.07\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 31.99\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1792403521,
                        "poseId": 1792403521,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4494.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:26\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.519082\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:26\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:26\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.6845\", \"Exif:SubsecTimeDigitized\": \"557\", \"Exif:SubsecTimeOriginal\": \"557\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.166667\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"325.551\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"325.551\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1842136106,
                        "poseId": 1842136106,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4487.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:19\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"1.02624\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:19\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:19\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"4.03254\", \"Exif:SubsecTimeDigitized\": \"861\", \"Exif:SubsecTimeOriginal\": \"861\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.0625\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"287.181\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"287.181\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1867929944,
                        "poseId": 1867929944,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4491.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:23\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"0.0471375\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:23\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:23\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"3.44742\", \"Exif:SubsecTimeDigitized\": \"480\", \"Exif:SubsecTimeOriginal\": \"480\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.0909091\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"302.111\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"302.111\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1884531806,
                        "poseId": 1884531806,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4496.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:28\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.794928\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:28\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:28\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.51456\", \"Exif:SubsecTimeDigitized\": \"237\", \"Exif:SubsecTimeOriginal\": \"237\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.166667\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"350.626\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"350.626\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1887584038,
                        "poseId": 1887584038,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4485.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:18\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"1.27131\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:18\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:18\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"80\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"4.03254\", \"Exif:SubsecTimeDigitized\": \"196\", \"Exif:SubsecTimeOriginal\": \"196\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.0625\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"285.955\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"285.955\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    },
                    {
                        "viewId": 1943033360,
                        "poseId": 1943033360,
                        "path": "C:/Users/Pixel Brush/Desktop/New folder/IMG_4498.JPG",
                        "intrinsicId": 419081174,
                        "rigId": -1,
                        "subPoseId": -1,
                        "metadata": "{\"AliceVision:SensorWidth\": \"4.890000\", \"DateTime\": \"2020:11:08 10:53:30\", \"Exif:ApertureValue\": \"1.69599\", \"Exif:BrightnessValue\": \"-0.425787\", \"Exif:ColorSpace\": \"65535\", \"Exif:DateTimeDigitized\": \"2020:11:08 10:53:30\", \"Exif:DateTimeOriginal\": \"2020:11:08 10:53:30\", \"Exif:ExifVersion\": \"0231\", \"Exif:ExposureBiasValue\": \"0\", \"Exif:ExposureMode\": \"0\", \"Exif:ExposureProgram\": \"2\", \"Exif:Flash\": \"24\", \"Exif:FlashPixVersion\": \"0100\", \"Exif:FocalLength\": \"3.99\", \"Exif:FocalLengthIn35mmFilm\": \"28\", \"Exif:LensMake\": \"Apple\", \"Exif:LensModel\": \"iPhone 7 Plus back dual camera 3.99mm f/1.8\", \"Exif:LensSpecification\": \"3.99, 6.6, 1.8, 2.8\", \"Exif:MeteringMode\": \"5\", \"Exif:OffsetTime\": \"+01:00\", \"Exif:OffsetTimeDigitized\": \"+01:00\", \"Exif:OffsetTimeOriginal\": \"+01:00\", \"Exif:PhotographicSensitivity\": \"100\", \"Exif:PixelXDimension\": \"4032\", \"Exif:PixelYDimension\": \"3024\", \"Exif:SceneCaptureType\": \"0\", \"Exif:SensingMethod\": \"2\", \"Exif:ShutterSpeedValue\": \"2.51456\", \"Exif:SubsecTimeDigitized\": \"384\", \"Exif:SubsecTimeOriginal\": \"384\", \"Exif:WhiteBalance\": \"0\", \"Exif:YCbCrPositioning\": \"1\", \"ExposureTime\": \"0.166667\", \"FNumber\": \"1.8\", \"GPS:Altitude\": \"364.328\", \"GPS:AltitudeRef\": \"0\", \"GPS:DestBearing\": \"6.14217\", \"GPS:DestBearingRef\": \"T\", \"GPS:HPositioningError\": \"65\", \"GPS:ImgDirection\": \"6.14217\", \"GPS:ImgDirectionRef\": \"T\", \"GPS:Latitude\": \"51, 1, 21.02\", \"GPS:LatitudeRef\": \"N\", \"GPS:Longitude\": \"7, 45, 32.11\", \"GPS:LongitudeRef\": \"E\", \"GPS:Speed\": \"0\", \"GPS:SpeedRef\": \"K\", \"ICCProfile\": \"0, 0, 2, 36, 97, 112, 112, 108, 4, 0, 0, 0, 109, 110, 116, 114, 82, 71, 66, 32, 88, 89, 90, 32, 7, 225, 0, 7, 0, 7, 0, 13, 0, 22, 0, 32, 97, 99, 115, 112, 65, 80, 80, 76, 0, 0, 0, 0, 65, 80, 80, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ... [548 x uint8]\", \"Make\": \"Apple\", \"Model\": \"iPhone 7 Plus\", \"Orientation\": \"6\", \"ResolutionUnit\": \"none\", \"Software\": \"14.1\", \"XResolution\": \"72\", \"YResolution\": \"72\", \"jpeg:subsampling\": \"4:2:0\", \"oiio:ColorSpace\": \"sRGB\"}"
                    }
                ],
                "intrinsics": [
                    {
                        "intrinsicId": 419081174,
                        "pxInitialFocalLength": 3289.914110429448,
                        "pxFocalLength": 3289.914110429448,
                        "type": "radial3",
                        "width": 4032,
                        "height": 3024,
                        "serialNumber": "C:/Users/Pixel Brush/Desktop/New folder_Apple_iPhone 7 Plus",
                        "principalPoint": {
                            "x": 2016.0,
                            "y": 1512.0
                        },
                        "initializationMode": "estimated",
                        "distortionParams": [
                            0.0,
                            0.0,
                            0.0
                        ],
                        "locked": false
                    }
                ],
                "sensorDatabase": "C:\\Users\\Pixel Brush\\Desktop\\old desktop\\Meshroom-2019.2.0\\aliceVision\\share\\aliceVision\\cameraSensors.db",
                "defaultFieldOfView": 45.0,
                "groupCameraFallback": "folder",
                "verboseLevel": "info"
            },
            "outputs": {
                "output": "{cache}/{nodeType}/{uid0}/cameraInit.sfm"
            }
        },
        "FeatureExtraction_1": {
            "nodeType": "FeatureExtraction",
            "position": [
                155,
                0
            ],
            "parallelization": {
                "blockSize": 40,
                "size": 29,
                "split": 1
            },
            "uids": {
                "0": "34878df8583c1e2c64bc6fba9f872719ca4ec63b"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "input": "{CameraInit_1.output}",
                "describerTypes": [
                    "sift"
                ],
                "describerPreset": "normal",
                "forceCpuExtraction": true,
                "verboseLevel": "info"
            },
            "outputs": {
                "output": "{cache}/{nodeType}/{uid0}/"
            }
        },
        "ImageMatching_1": {
            "nodeType": "ImageMatching",
            "position": [
                310,
                0
            ],
            "parallelization": {
                "blockSize": 0,
                "size": 29,
                "split": 1
            },
            "uids": {
                "0": "672c7b14b2956ec4cbea70100e563071ea0c0195"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "input": "{FeatureExtraction_1.input}",
                "featuresFolders": [
                    "{FeatureExtraction_1.output}"
                ],
                "tree": "C:\\Users\\Pixel Brush\\Desktop\\old desktop\\Meshroom-2019.2.0\\aliceVision\\share\\aliceVision\\vlfeat_K80L3.SIFT.tree",
                "weights": "",
                "minNbImages": 200,
                "maxDescriptors": 500,
                "nbMatches": 50,
                "verboseLevel": "info"
            },
            "outputs": {
                "output": "{cache}/{nodeType}/{uid0}/imageMatches.txt"
            }
        },
        "FeatureMatching_1": {
            "nodeType": "FeatureMatching",
            "position": [
                465,
                0
            ],
            "parallelization": {
                "blockSize": 20,
                "size": 29,
                "split": 2
            },
            "uids": {
                "0": "6effd7b76349f323ad7606688cb72af5b40c2da4"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "input": "{ImageMatching_1.input}",
                "featuresFolders": "{ImageMatching_1.featuresFolders}",
                "imagePairsList": "{ImageMatching_1.output}",
                "describerTypes": [
                    "sift"
                ],
                "photometricMatchingMethod": "ANN_L2",
                "geometricEstimator": "acransac",
                "geometricFilterType": "fundamental_matrix",
                "distanceRatio": 0.8,
                "maxIteration": 2048,
                "geometricError": 0.0,
                "maxMatches": 0,
                "savePutativeMatches": false,
                "guidedMatching": false,
                "exportDebugFiles": false,
                "verboseLevel": "info"
            },
            "outputs": {
                "output": "{cache}/{nodeType}/{uid0}/"
            }
        },
        "StructureFromMotion_1": {
            "nodeType": "StructureFromMotion",
            "position": [
                620,
                0
            ],
            "parallelization": {
                "blockSize": 0,
                "size": 29,
                "split": 1
            },
            "uids": {
                "0": "5918698d6615c328214e24feb26b3e36a0ff68d3"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "input": "{FeatureMatching_1.input}",
                "featuresFolders": "{FeatureMatching_1.featuresFolders}",
                "matchesFolders": [
                    "{FeatureMatching_1.output}"
                ],
                "describerTypes": [
                    "sift"
                ],
                "localizerEstimator": "acransac",
                "localizerEstimatorMaxIterations": 4096,
                "localizerEstimatorError": 0.0,
                "lockScenePreviouslyReconstructed": false,
                "useLocalBA": true,
                "localBAGraphDistance": 1,
                "maxNumberOfMatches": 0,
                "minInputTrackLength": 2,
                "minNumberOfObservationsForTriangulation": 2,
                "minAngleForTriangulation": 3.0,
                "minAngleForLandmark": 2.0,
                "maxReprojectionError": 4.0,
                "minAngleInitialPair": 5.0,
                "maxAngleInitialPair": 40.0,
                "useOnlyMatchesFromInputFolder": false,
                "useRigConstraint": true,
                "lockAllIntrinsics": false,
                "initialPairA": "",
                "initialPairB": "",
                "interFileExtension": ".abc",
                "verboseLevel": "info"
            },
            "outputs": {
                "output": "{cache}/{nodeType}/{uid0}/sfm.abc",
                "outputViewsAndPoses": "{cache}/{nodeType}/{uid0}/cameras.sfm",
                "extraInfoFolder": "{cache}/{nodeType}/{uid0}/"
            }
        },
        "PrepareDenseScene_1": {
            "nodeType": "PrepareDenseScene",
            "position": [
                775,
                0
            ],
            "parallelization": {
                "blockSize": 40,
                "size": 29,
                "split": 1
            },
            "uids": {
                "0": "078c90cf243832e88db0b91eee73a85db70dd21d"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "input": "{StructureFromMotion_1.output}",
                "imagesFolders": [],
                "outputFileType": "exr",
                "saveMetadata": true,
                "saveMatricesTxtFiles": false,
                "evCorrection": false,
                "verboseLevel": "info"
            },
            "outputs": {
                "output": "{cache}/{nodeType}/{uid0}/",
                "outputUndistorted": "{cache}/{nodeType}/{uid0}/*.{outputFileTypeValue}"
            }
        },
        "DepthMap_1": {
            "nodeType": "DepthMap",
            "position": [
                930,
                0
            ],
            "parallelization": {
                "blockSize": 3,
                "size": 29,
                "split": 10
            },
            "uids": {
                "0": "a11fb94cad2c63a28a9a333fc94168dadd3f070a"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "input": "{PrepareDenseScene_1.input}",
                "imagesFolder": "{PrepareDenseScene_1.output}",
                "downscale": 2,
                "minViewAngle": 2.0,
                "maxViewAngle": 70.0,
                "sgmMaxTCams": 10,
                "sgmWSH": 4,
                "sgmGammaC": 5.5,
                "sgmGammaP": 8.0,
                "refineMaxTCams": 6,
                "refineNSamplesHalf": 150,
                "refineNDepthsToRefine": 31,
                "refineNiters": 100,
                "refineWSH": 3,
                "refineSigma": 15,
                "refineGammaC": 15.5,
                "refineGammaP": 8.0,
                "refineUseTcOrRcPixSize": false,
                "exportIntermediateResults": false,
                "nbGPUs": 0,
                "verboseLevel": "info"
            },
            "outputs": {
                "output": "{cache}/{nodeType}/{uid0}/"
            }
        },
        "DepthMapFilter_1": {
            "nodeType": "DepthMapFilter",
            "position": [
                1085,
                0
            ],
            "parallelization": {
                "blockSize": 10,
                "size": 29,
                "split": 3
            },
            "uids": {
                "0": "9906264e7dad2de48fda1e625f140e045f2e3bc0"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "input": "{DepthMap_1.input}",
                "depthMapsFolder": "{DepthMap_1.output}",
                "minViewAngle": 2.0,
                "maxViewAngle": 70.0,
                "nNearestCams": 10,
                "minNumOfConsistentCams": 3,
                "minNumOfConsistentCamsWithLowSimilarity": 4,
                "pixSizeBall": 0,
                "pixSizeBallWithLowSimilarity": 0,
                "computeNormalMaps": false,
                "verboseLevel": "info"
            },
            "outputs": {
                "output": "{cache}/{nodeType}/{uid0}/"
            }
        },
        "Meshing_1": {
            "nodeType": "Meshing",
            "position": [
                1240,
                0
            ],
            "parallelization": {
                "blockSize": 0,
                "size": 1,
                "split": 1
            },
            "uids": {
                "0": "b96260a388ee0a37f26082328a6ec2892202b041"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "input": "{DepthMapFilter_1.input}",
                "depthMapsFolder": "{DepthMapFilter_1.depthMapsFolder}",
                "depthMapsFilterFolder": "{DepthMapFilter_1.output}",
                "estimateSpaceFromSfM": true,
                "estimateSpaceMinObservations": 3,
                "estimateSpaceMinObservationAngle": 10,
                "maxInputPoints": 50000000,
                "maxPoints": 5000000,
                "maxPointsPerVoxel": 1000000,
                "minStep": 2,
                "partitioning": "singleBlock",
                "repartition": "multiResolution",
                "angleFactor": 15.0,
                "simFactor": 15.0,
                "pixSizeMarginInitCoef": 2.0,
                "pixSizeMarginFinalCoef": 4.0,
                "voteMarginFactor": 4.0,
                "contributeMarginFactor": 2.0,
                "simGaussianSizeInit": 10.0,
                "simGaussianSize": 10.0,
                "minAngleThreshold": 1.0,
                "refineFuse": true,
                "addLandmarksToTheDensePointCloud": false,
                "colorizeOutput": false,
                "saveRawDensePointCloud": false,
                "verboseLevel": "info"
            },
            "outputs": {
                "outputMesh": "{cache}/{nodeType}/{uid0}/mesh.obj",
                "output": "{cache}/{nodeType}/{uid0}/densePointCloud.abc"
            }
        },
        "MeshFiltering_1": {
            "nodeType": "MeshFiltering",
            "position": [
                1395,
                0
            ],
            "parallelization": {
                "blockSize": 0,
                "size": 1,
                "split": 1
            },
            "uids": {
                "0": "e32f67916ae61ab450157af5b1384d072b3163e5"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "inputMesh": "{Meshing_1.outputMesh}",
                "removeLargeTrianglesFactor": 60.0,
                "keepLargestMeshOnly": false,
                "iterations": 5,
                "lambda": 1.0,
                "verboseLevel": "info"
            },
            "outputs": {
                "outputMesh": "{cache}/{nodeType}/{uid0}/mesh.obj"
            }
        },
        "Texturing_1": {
            "nodeType": "Texturing",
            "position": [
                1550,
                0
            ],
            "parallelization": {
                "blockSize": 0,
                "size": 1,
                "split": 1
            },
            "uids": {
                "0": "f878a22c7da02c0a31b1f09027185276126d2d92"
            },
            "internalFolder": "{cache}/{nodeType}/{uid0}/",
            "inputs": {
                "input": "{Meshing_1.output}",
                "imagesFolder": "{DepthMap_1.imagesFolder}",
                "inputMesh": "{MeshFiltering_1.outputMesh}",
                "textureSide": 8192,
                "downscale": 1,
                "outputTextureFileType": "png",
                "unwrapMethod": "Basic",
                "useUDIM": true,
                "fillHoles": false,
                "padding": 5,
                "correctEV": false,
                "useScore": true,
                "processColorspace": "sRGB",
                "multiBandDownscale": 4,
                "multiBandNbContrib": {
                    "high": 1,
                    "midHigh": 5,
                    "midLow": 10,
                    "low": 0
                },
                "bestScoreThreshold": 0.1,
                "angleHardThreshold": 90.0,
                "forceVisibleByAllVertices": false,
                "flipNormals": false,
                "visibilityRemappingMethod": "PullPush",
                "verboseLevel": "info"
            },
            "outputs": {
                "output": "{cache}/{nodeType}/{uid0}/",
                "outputMesh": "{cache}/{nodeType}/{uid0}/texturedMesh.obj",
                "outputMaterial": "{cache}/{nodeType}/{uid0}/texturedMesh.mtl",
                "outputTextures": "{cache}/{nodeType}/{uid0}/texture_*.{outputTextureFileTypeValue}"
            }
        }
    }
}