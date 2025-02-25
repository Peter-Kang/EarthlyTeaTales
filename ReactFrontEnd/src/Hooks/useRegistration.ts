import { useState, useCallback } from 'react';
import {
  startRegistration,
  PublicKeyCredentialCreationOptionsJSON,
  RegistrationCredential,
  RegistrationResponseJSON,
} from '@simplewebauthn/browser';

interface UseWebAuthnRegistrationResult {
  start: (options: PublicKeyCredentialCreationOptionsJSON) => Promise<RegistrationResponseJSON | null>;
  loading: boolean;
  error: Error | null;
}

const useWebAuthnRegistration = (): UseWebAuthnRegistrationResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const start = useCallback(
    async (options: PublicKeyCredentialCreationOptionsJSON): Promise<RegistrationResponseJSON | null> => {
      setLoading(true);
      setError(null);
      try {
        const credential = await startRegistration({optionsJSON:options});
        setLoading(false);
        return credential;
      } catch (e) {
        setError(e instanceof Error ? e : new Error(String(e)));
        setLoading(false);
        return null;
      }
    },
    [],
  );

  return { start, loading, error };
};

export default useWebAuthnRegistration;