import {task} from 'hardhat/config';
import {ZERO_ADDRESS} from '../../helpers/constants';
import {deployAaveGovernanceV2} from '../../helpers/contracts-deployments';

task(`deploy:gov`, `Deploy governance for tests and development purposes`)
  .addFlag('verify')
  .addParam('strategy', '', ZERO_ADDRESS)
  .addParam('votingDelay', '', '1')
  .addParam('guardian', '', ZERO_ADDRESS)
  .setAction(async ({strategy, votingDelay, guardian}, _DRE) => {
    _DRE.run('set-DRE');
    return await deployAaveGovernanceV2(strategy, votingDelay, guardian, []);
  });