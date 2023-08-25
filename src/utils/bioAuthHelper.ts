import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'

/**
 * To know if the Biometric is supported in the current device.
 * @returns "ReactNativeBiometrics" if Biometric is supported. "false" if not supported.
 */
const isReady = (async () => {
  const rnBiometrics = new ReactNativeBiometrics();
  try {
    const { available, biometryType } = await rnBiometrics.isSensorAvailable();
    const bTypes = [BiometryTypes.FaceID, BiometryTypes.TouchID, BiometryTypes.Biometrics];

    if (available && (bTypes.some((bType) => (bType === biometryType)))) {
      return rnBiometrics;
    } else {
      throw 'Biometrics is not supported';
    }
  } catch (error) {
    console.log('Error: ', error);
    return false;
  }
});

/**
 * To authenticate using Biometric.
 * @returns a Promise that resolves to an object containing a success flag and a message according to the result.
 */
const BioAuthenticate: () => Promise<{ success: boolean; message: string; }> = (async () => {
  try {
    const rnBioMentric = await isReady();
    if (!rnBioMentric) return { success: false, message: 'Biometric is not supported!' };
    const { success } = await rnBioMentric.simplePrompt({ promptMessage: 'Verify your identity' });
    if (success) {
      return { success: true, message: 'Authentication success' };
    } else {
      throw 'Authentication failed!';
    }
  } catch (error) {
    console.log('Error: ', error);
    return { success: false, message: 'Authentication failed!' };
  }
});

export default BioAuthenticate;
