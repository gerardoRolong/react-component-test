import { useWebsiteInfo } from '../hooks/useWebsiteInfo';
import { renderHook } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

jest.mock('axios');

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Test custom hook that performs websites status check', () => {
  
    beforeEach(() => {
      jest.useFakeTimers('legacy')
    });

    afterEach(() => {
      jest.clearAllTimers();
      jest.clearAllMocks();
    });
  
    it('should execute axios call every given time', async () => {
      
      const dispatch = jest.fn();
      useDispatch.mockReturnValue(dispatch);
      
      const websitesList = {
        'Website1': 'example.com',
        'Website2': 'example.org',
      };
      
      
      axios.get.mockResolvedValue({ status: 200 });  
      const { result } = renderHook(() => useWebsiteInfo(websitesList));

      // Initial render
      expect(result.current).toBeUndefined();    
  
      // checkStatus should be called once
      expect(axios.get).toHaveBeenCalledTimes(1);
      
      // Fast-forward time by 5000 milliseconds
      jest.advanceTimersByTime(5000);
      expect(axios.get).toHaveBeenCalledTimes(2);
         
      // // Clean up timers
      jest.runOnlyPendingTimers();
      
    })
    
    
})